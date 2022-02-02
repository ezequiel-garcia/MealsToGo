/* eslint-disable jsx-quotes */
/* eslint-disable prettier/prettier */

import React from 'react';
import { Favourite } from '../../../components/favourites/favourite.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/typography/text.component';
import { SvgXml } from 'react-native-svg';
import { View } from 'react-native';
import star from '../../../../assets/star';
import open from '../../../../assets/open';

import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  Rating,
  Address,
} from './restaurant-info-card.styles';

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = 'Some Restaurant',
    icon = '',
    photos = [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGc3AWqn0Evqk8EcaWqzTVffXX3DPija2zcy4H0m-y3It8N0UElVKhvuWzzoNW-wr9NZE&usqp=CAU',
    ],
    address = '100 some random street',
    isOpenNow = true,
    rating = 3.6,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.round(rating)));

  return (
    <RestaurantCard>
      <View>
        <Favourite restaurant={restaurant} />
        <RestaurantCardCover
          key={name}
          source={{
            uri: photos[0],
          }}
        />
      </View>
      <Info>
        <Text variant='label'>{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map((_, idx) => (
              <SvgXml
                key={`star-${placeId}-${idx}`}
                xml={star}
                width={20}
                height={20}
              />
            ))}
          </Rating>
          <Section>
            <Spacer position='right' size='medium'>
              {isClosedTemporarily && (
                <Text variant='error'>CLOSED TEMPORARILY</Text>
              )}
            </Spacer>
            {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
          </Section>
        </Section>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
};
