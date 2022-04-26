export type PcProps = {
  media: "pc";
};

export type SpProps = {
  media: "sp";
  onClick: () => undefined;
};

export type Props = PcProps | SpProps;
