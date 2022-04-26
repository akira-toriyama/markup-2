import React, { createContext } from "react";
import { useMedia } from "react-use";
import * as s from "~/presenter/defined/styles";

export type State = {
  media: "pc" | "sp";
};

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
export const MediaContext = createContext<State>(undefined!);

export const Media: React.FC<{ children: React.ReactNode }> = (props) => {
  const ispc = useMedia(s.device.pc);

  return (
    <MediaContext.Provider value={{ media: ispc ? "pc" : "sp" }}>
      {props.children}
    </MediaContext.Provider>
  );
};
