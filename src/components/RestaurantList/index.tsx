import React, { FunctionComponent, useEffect } from "react";

type RestaurantListProps = {
  loadRestaurants: () => void
}

export const RestaurantList: FunctionComponent<RestaurantListProps> = ({ loadRestaurants }) => {
  useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);

  return (
    <div>
      <h1>Restaurant List</h1>
    </div>
  );
};

export default RestaurantList;
