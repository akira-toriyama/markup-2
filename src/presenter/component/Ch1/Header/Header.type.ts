export type PcProps = {
  media: "pc";
  showMenu: boolean;
};

export type SpProps = {
  media: "sp";
  showMenu: boolean;
  actions: {
    toggleMenu: () => void;
  };
};

export type Props = PcProps | SpProps;

export type LookUp<U, T extends Props["media"]> = U extends { media: T }
  ? U
  : never;
