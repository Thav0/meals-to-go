import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { Text } from "../../../componentes/typography/text.component";

export const RestaurantCard = styled(Card)`
  background-color: ${(props: any) => props.theme.colors.bg.primary};
  margin-bottom: ${(props: any) => props.theme.space[3]};
`;
export const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props: any) => props.theme.sizes[1]};
  background-color: ${(props: any) => props.theme.colors.bg.primary};
`;

export const RestaurantCardContent = styled(Card.Content)``;

export const Address = styled(Text)`
  font-family: ${(props: any) => props.theme.fonts.body};
  font-size: ${(props: any) => props.theme.fontSizes.caption};
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props: any) => props.theme.space[2]};
  padding-bottom: ${(props: any) => props.theme.space[2]};
`;

export const IsOpen = styled.View``;

export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;
