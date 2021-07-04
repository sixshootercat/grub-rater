import React, { FunctionComponent, useEffect } from "react";

type Restaurant = {
  name: string;
  id: number
}

type RestaurantListProps = {
  loadRestaurants: () => void
  restaurants: Restaurant[]
}

export const RestaurantList: FunctionComponent<RestaurantListProps> = ({
  loadRestaurants,
  restaurants,
}) => {
  useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);

  return (
    <>
      <ul>
        {restaurants.map((restaurant) => <li key={restaurant.id}>{restaurant.name}</li>)}
      </ul>

    </>
  );
};

export default RestaurantList;
