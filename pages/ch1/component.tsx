import type { NextPage } from "next";
import { Ch1 } from "~/presenter/component/Ch1";
import { CSR } from "~/presenter/component/CSR";

export const Page: NextPage = () => (
  <CSR>
    <Ch1 />
  </CSR>
);
