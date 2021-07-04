import React, { FunctionComponent, useEffect } from "react";
import { connect } from "react-redux";
import { loadRestaurants } from "../../store/restaurants/actions";

type Restaurant = {
  name: string;
  id: number
}

type RestaurantListProps = {
  loadRestaurants: () => void,
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

const mapStateToProps = (state: any) => ({
  restaurants: state.restaurants.records,
});

const mapDispatchToProps = { loadRestaurants };

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);
