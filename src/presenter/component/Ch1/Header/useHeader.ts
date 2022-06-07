import { useMedia } from "~/presenter/hooks/useMedia";
import type { State as MediaState } from "~/presenter/context/Media";
import type * as type from "./Header.type";
import { match } from "ts-pattern";
import { useApp } from "~/presenter/hooks/useApp";
import type { State as AppState } from "~/presenter/context/App";

type UseHeader = () => type.Props;
export const useHeader: UseHeader = () => {
  const mediaState = useMedia();
  const appState = useApp();

  return match<MediaState & AppState, type.Props>({
    ...mediaState,
    ...appState,
  })
    .with({ media: "pc" }, (p) => p)
    .with({ media: "sp" }, (p) => ({
      ...p,
      actions: {
        toggleMenu: () =>
          appState.dispatch.setShowMenu({ showMenu: !appState.showMenu }),
      },
    }))
    .exhaustive();
};
