import React from "react";
import styled from "styled-components/native";
import { View } from "react-native";
import { Button, Card, Paragraph, Title, Text } from "react-native-paper";

interface RestaurantInfoData {
  name: string;
  icon: string;
  photos: string[];
  address: string;
  isOpenNow: boolean;
  rating: number;
  isClosedTemporary: boolean;
}

interface RestaurantProp {
  restaurant: RestaurantInfoData;
}

const RestaurantCard = styled(Card)`
  background-color: ${(props: any) => props.theme.colors.bg.primary};
`;
const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props: any) => props.theme.sizes[1]};
  background-color: ${(props: any) => props.theme.colors.bg.primary};
`;

const RestaurantCardContent = styled(Card.Content)``;
const RestaurantCardContentParagraph = styled(Paragraph)`
  font-family: ${(props: any) => props.theme.fonts.body};
`;

const TitleText = styled(Title)`
  font-family: ${(props: any) => props.theme.fonts.heading};
`;

const RestaurantInfoCard: React.FC<RestaurantProp> = ({
  restaurant,
  ...rest
}) => {
  const {
    name,
    icon,
    photos,
    address,
    isOpenNow,
    rating,
    isClosedTemporary,
  } = restaurant;

  return (
    <RestaurantCard>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <RestaurantCardContent>
        <TitleText>{name}</TitleText>
        <RestaurantCardContentParagraph>
          Card content
        </RestaurantCardContentParagraph>
      </RestaurantCardContent>
    </RestaurantCard>
  );
};
export default RestaurantInfoCard;
