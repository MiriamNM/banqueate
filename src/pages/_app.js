import "@styles/tailwind.css";
import "@layout/Main/index";
import Main from "@layout/Main/index";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Main>
        <Component {...pageProps} />
      </Main>
    </>
  );
}

export default MyApp;
