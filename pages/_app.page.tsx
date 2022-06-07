import Head from "next/head";
import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { ErrorBoundary } from "~/presenter/component/ErrorBoundary";
import { Theme } from "~/presenter/component/GlobalStyle";
import { Media } from "~/presenter/context/Media";
import { App } from "~/presenter/context/App";
import { CSR } from "~/presenter/component/CSR";
import * as S from "./styles";

const Page: NextPage<AppProps> = (props) => (
  <CSR>
    <Head>
      {/* レスポンシブ用設定 */}
      <meta name="viewport" content="width=device-width" />
    </Head>
    <ErrorBoundary>
      <App>
        <Theme>
          <Media>
            <S.AppWrapper>
              <props.Component {...props.pageProps} />
            </S.AppWrapper>
          </Media>
        </Theme>
      </App>
    </ErrorBoundary>
  </CSR>
);

// ts-prune-ignore-next
export default Page;
