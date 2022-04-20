import type { NextPage } from "next";
import type { AppProps } from "next/app";
import { ErrorBoundary } from "~/presenter/component/ErrorBoundary";
import { Theme } from "~/presenter/component/GlobalStyle";

const Page: NextPage<AppProps> = (props) => (
  <ErrorBoundary>
    <Theme>
      <props.Component {...props.pageProps} />
    </Theme>
  </ErrorBoundary>
);

// ts-prune-ignore-next
export default Page;
