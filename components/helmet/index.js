import NextHead from 'next/head';
import siteConfig from 'content/site';

const prepareTitle = (givenTitle) => {
  return givenTitle || siteConfig.title;
};

const prepareDescription = (givenDescription) => {
  return givenDescription || siteConfig.description;
};

// noinspection JSUnresolvedLibraryURL
const Helmet = (props) => (
  <NextHead>
    <meta charSet='UTF-8' />

    <title>{ prepareTitle(props.title) }</title>

    <link rel="manifest" href="/manifest/manifest.json" />
    <link rel="icon" type="image/png" sizes="32x32" href="/manifest/icon32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/manifest/icon16.png" />
    <link rel="shortcut icon" href="/manifest/favicon.ico" type="image/x-icon" />
    <link rel="icon" href="/manifest/favicon.ico" type="image/x-icon" />

    { /* Global Site Tag (gtag.js) - Google Analytics */ }
    { process.env.GA_SECRET && (
      <>
        <script async src={ `https://www.googletagmanager.com/gtag/js?id=${process.env.GA_SECRET}` } />
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GA_SECRET}');
          `,
        }} />
      </>
    )}

  </NextHead>
);

export default Helmet;
