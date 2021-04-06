import React from "react";

import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import RestaurantInfoCard from "../components/restaurants-info-card.component";

const isAndroid = Platform.OS === "android";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top:${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  padding: ${(props: any) => props.theme.space[3]};
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  flex-grow: 1;
  padding: ${(props: any) => props.theme.space[3]};
`;

const RestaurantScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query: string) => setSearchQuery(query);

  const restaurantData = {
    name: "Some Restaurant",
    icon: "dd",
    photos: [
      "https://media-cdn.tripadvisor.com/media/photo-s/1c/3e/c5/71/nosso-buffet-com-variedades.jpg",
    ],
    address: "100 some random address",
    isOpenNow: true,
    rating: 4.2,
    isClosedTemporary: true,
  };

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantInfoCard restaurant={restaurantData} />
      </RestaurantListContainer>
    </SafeArea>
  );
};

export default RestaurantScreen;
