import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '@components/Header';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('Header', () => {
  it('renders the header content correctly', () => {
    useRouter.mockReturnValue({ pathname: '/' });

    render(<Header onChange={() => {}} />);

    expect(screen.getByAltText('logo')).toBeInTheDocument();

    expect(screen.getByText('Banks')).toBeInTheDocument();
    expect(screen.getByRole('link')).toHaveAttribute('href', '/Banks');
  });

  it('renders the search input when on the Banks page', () => {
    useRouter.mockReturnValue({ pathname: '/Banks' });

    render(<Header onChange={() => {}} />);

    expect(screen.getByAltText('logo')).toBeInTheDocument();

    expect(screen.getByPlaceholderText('Busca el producto')).toBeInTheDocument();
  });

  it('triggers the onChange prop when typing in the search input', () => {
    useRouter.mockReturnValue({ pathname: '/Banks' });

    const mockOnChange = jest.fn();

    render(<Header onChange={mockOnChange} />);

    const searchInput = screen.getByPlaceholderText('Busca el producto');
    fireEvent.change(searchInput, { target: { value: 'term' } });

    expect(mockOnChange).toHaveBeenCalledWith('term');
  });
});
