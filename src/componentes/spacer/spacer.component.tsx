import React from "react";
import styled, { useTheme } from "styled-components/native";

const sizeVariant = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariant = {
  top: "margin-top",
  left: "margin-left",
  right: "margin-right",
  bottom: "margin-bottom",
};

type PositionTypes = "top" | "right" | "bottom" | "left";
type SizeTypes = "small" | "medium" | "large";

const getVariant = (position: PositionTypes, size: SizeTypes, theme: any) => {
  const sizeIndex = sizeVariant[size];
  const property = positionVariant[position];
  const value = theme.space[sizeIndex];

  return `${property}:${value}`;
};

const SpacerView = styled.View`
  ${({ variant }: any) => variant}
`;

export const Spacer = ({
  position,
  size,
  children,
}: {
  position: PositionTypes;
  size: SizeTypes;
  children: any;
}) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);

  return <SpacerView variant={variant}>{children}</SpacerView>;
};
