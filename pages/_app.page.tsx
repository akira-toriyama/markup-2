import Head from "next/head";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { ErrorBoundary } from "~/presenter/component/ErrorBoundary";
import { Theme } from "~/presenter/component/GlobalStyle";
import { Media } from "~/presenter/context/Media";
import { CSR } from "~/presenter/component/CSR";

const Page: NextPage<AppProps> = (props) => (
  <CSR>
    <Head>
      {/* レスポンシブ用設定 */}
      <meta name="viewport" content="width=device-width" />
    </Head>
    <ErrorBoundary>
      <Theme>
        <Media>
          <props.Component {...props.pageProps} />
        </Media>
      </Theme>
    </ErrorBoundary>
  </CSR>
);

// ts-prune-ignore-next
export default Page;
