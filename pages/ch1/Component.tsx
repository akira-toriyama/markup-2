import type { NextPage } from "next";
import { Ch1 } from "~/presenter/component/Ch1";
import { Base } from "~/presenter/component/Layout";

export const Page: NextPage = () => (
  <Base>
    <Ch1 />
  </Base>
);
