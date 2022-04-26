import { useMedia } from "~/presenter/hooks/useMedia";
import type { State as MediaState } from "~/presenter/context/Media";
import type * as type from "./Header.type";
import { match } from "ts-pattern";

type UseHeader = () => type.Props;
export const useHeader: UseHeader = () => {
  const m = useMedia();

  return match<MediaState, type.Props>(m)
    .with({ media: "pc" }, (p) => p)
    .with({ media: "sp" }, (p) => ({ ...p, onClick: () => undefined }))
    .exhaustive();
};
