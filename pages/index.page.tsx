import type { NextPage } from "next";
import NextLink from "next/link";

const Page: NextPage = () => (
  <ul>
    <li>
      <NextLink href="/ch1">App</NextLink>
    </li>
  </ul>
);

// ts-prune-ignore-next
export default Page;
