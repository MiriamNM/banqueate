import "@styles/tailwind.css";
import "@layout/Main/index";
import Main from "@layout/Main/index";
import { BanksProvider } from "@hooks/useDataBankContext";

function MyApp({ Component, pageProps }) {
  return (
    <BanksProvider>
      <Main>
        <Component {...pageProps} />
      </Main>
    </BanksProvider>
  );
}

export default MyApp;
