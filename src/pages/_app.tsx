// import Layout from '../components/Layout';
import "@/styles/globals.css";
import type { AppProps } from "next/app";
// import { store } from '@/store/store';
import { Provider } from "react-redux";
import NextNProgress from "nextjs-progressbar";
import Layout from "@/components/Layout";
import { store } from "@/store/store";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps }:  AppProps) {
  return (
    <>
      <NextNProgress color="#0b469c" />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>

    /**<Provider store={store}>
      <NextNProgress color="#123369" />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider> */
  );
}

/**
 *     <SessionProvider session={session}>
      <Provider store={store}>
        <NextNProgress color="#0b469c" />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </SessionProvider>
 */
