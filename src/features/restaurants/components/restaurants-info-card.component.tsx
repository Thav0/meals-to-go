import React from "react";
import styled from "styled-components/native";
import { Card, Title, Text } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Image, View } from "react-native";
import { Spacer } from "../../../componentes/spacer/spacer.component";

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

const TitleText = styled(Title)`
  font-family: ${(props: any) => props.theme.fonts.heading};
  font-size: ${(props: any) => props.theme.fontSizes.title};
`;

const Address = styled(Text)`
  font-family: ${(props: any) => props.theme.fonts.body};
  font-size: ${(props: any) => props.theme.fontSizes.caption};
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${(props: any) => props.theme.space[2]};
  padding-bottom: ${(props: any) => props.theme.space[2]};
`;

const IsOpen = styled.View``;

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

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <RestaurantCardContent>
        <TitleText>{name}</TitleText>
        <Row>
          <Rating>
            {ratingArray.map((rate) => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          {isClosedTemporary && (
            <Text style={{ color: "red" }}>CLOSED TEMPORARILY</Text>
          )}
          <Spacer position="left" size="large">
            {isOpenNow && (
              <IsOpen>
                <SvgXml xml={open} width={20} height={20} />
              </IsOpen>
            )}
          </Spacer>
          <Spacer position="left" size="large">
            <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
          </Spacer>
        </Row>

        <Address>{address}</Address>
      </RestaurantCardContent>
    </RestaurantCard>
  );
};
export default RestaurantInfoCard;
