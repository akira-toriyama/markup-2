export type PcProps = {
  media: "pc";
};

export type SpProps = {
  media: "sp";
  onClick: () => undefined;
};

export type Props = PcProps | SpProps;

export type LookUp<U, T extends Props["media"]> = U extends { media: T }
  ? U
  : never;
