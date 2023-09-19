import Head from 'next/head';
import Button from '../components/Button';

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Next App</title>
        <meta name="description" content="My Next App with Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-4">
        <h1 className="text-3xl mb-4">Hello, Next.js with Tailwind CSS</h1>
        <Button />
      </main>
    </div>
  );
}
