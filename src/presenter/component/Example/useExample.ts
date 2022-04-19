import { useState } from "react";
import type { Props } from "./Example.type";

type UseExample = () => Props;
export const useExample: UseExample = () => {
  const [isSome] = useState(true);

  return {
    isSome,
  };
};
