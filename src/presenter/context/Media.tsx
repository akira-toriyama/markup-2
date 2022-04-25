import React, { createContext } from "react";
import { useMedia } from "react-use";
import * as s from "~/presenter/defined/styles";

export type State = {
  media: "desktop" | "sp";
};

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const MediaContext = createContext<State>(undefined!);

export const Media: React.FC<{ children: React.ReactNode }> = (props) => {
  const isDesktop = useMedia(s.device.desktop);

  return (
    <MediaContext.Provider value={{ media: isDesktop ? "desktop" : "sp" }}>
      {props.children}
    </MediaContext.Provider>
  );
};
