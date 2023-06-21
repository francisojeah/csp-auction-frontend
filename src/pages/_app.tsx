import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import NextNProgress from "nextjs-progressbar";
import Layout from "@/components/Layout";
import { store } from "@/store/store";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <>
          <NextNProgress color="#0b469c" />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </>
      </Provider>
    </SessionProvider>
  );
}
