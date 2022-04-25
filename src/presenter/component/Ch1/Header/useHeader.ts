import { useMedia } from "~/presenter/hooks/useMedia";
import type * as type from "./Header.type";

type UseHeader = () => type.Props;
export const useHeader: UseHeader = () => {
  const m = useMedia();

  return {
    ...m,
  };
};
