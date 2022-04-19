import type { NextPage } from "next";
import NextLink from "next/link";

const Page: NextPage = () => (
  <ul>
    <li>
      <NextLink href="/ch1">ch1</NextLink>
    </li>
    <li>
      <NextLink href="/example">example</NextLink>
    </li>
  </ul>
);

// ts-prune-ignore-next
export default Page;
