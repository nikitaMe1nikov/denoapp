import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { Grommet } from 'grommet';
import withRedux, { ReduxWrapperAppProps } from 'next-redux-wrapper';
import makeStore from 'Modules/makeStore';
import GlobalStyles from 'GlobalStyles';
import theme from 'theme';

class MyApp extends App<ReduxWrapperAppProps> {
  // static getInitialProps = async ({ Component, ctx }) => {
  //   console.log('App getInitialProps');

  //   return {
  //     pageProps: {
  //       // Call page-level getInitialProps
  //       ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
  //       // Some custom thing for all pages
  //       pathname: ctx.pathname,
  //     },
  //   };
  // };

  render() {
    const { Component, pageProps, store } = this.props;
    // console.log('MyApp');
    return (
      <Grommet theme={theme} full>
        <Provider store={store}>
          <Head>
            <title>Demoshop</title>
            <link rel="icon" href="/favicon.ico" />
            <link
              href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap"
              rel="stylesheet"
            />
          </Head>
          <GlobalStyles />
          <Component {...pageProps} />
        </Provider>
      </Grommet>
    );
  }
}

export default withRedux(makeStore)(MyApp);
