import React from "react";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../componentes/spacer/spacer.component";
import { Text } from "../../../componentes/typography/text.component";
import {
  Address,
  Icon,
  IsOpen,
  Rating,
  RestaurantCard,
  RestaurantCardContent,
  RestaurantCardCover,
  Row,
} from "./restaurants-info-card.styles";

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

const RestaurantInfoCard: React.FC<RestaurantProp> = ({
  restaurant = {},
  ...rest
}) => {
  const {
    name = "Some Restaurant",
    icon = "dd",
    photos = [
      "https://media-cdn.tripadvisor.com/media/photo-s/1c/3e/c5/71/nosso-buffet-com-variedades.jpg",
    ],
    address = "100 some random address",
    isOpenNow = true,
    rating = 4.2,
    isClosedTemporary = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <RestaurantCardContent>
        <Text variant="label">{name}</Text>
        <Row>
          <Rating>
            {ratingArray.map((rate, key) => (
              <SvgXml key={key} xml={star} width={20} height={20} />
            ))}
          </Rating>
          {isClosedTemporary && <Text variant="error">CLOSED TEMPORARILY</Text>}
          <Spacer position="left" size="large">
            {isOpenNow && (
              <IsOpen>
                <SvgXml xml={open} width={20} height={20} />
              </IsOpen>
            )}
          </Spacer>
          <Spacer position="left" size="large">
            <Icon source={{ uri: icon }} />
          </Spacer>
        </Row>

        <Address variant="body">{address}</Address>
      </RestaurantCardContent>
    </RestaurantCard>
  );
};
export default RestaurantInfoCard;
