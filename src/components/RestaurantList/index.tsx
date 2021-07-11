import React, { FunctionComponent, useEffect } from "react";
import { connect } from "react-redux";
import { AppState } from "../../store/reducers";
import { loadRestaurants as _loadRestaurants } from "../../store/restaurants/actions";
import { Restaurant } from "../../store/restaurants/types";

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

const mapStateToProps = (state: AppState) => ({
  restaurants: state.restaurants.records,
});

const mapDispatchToProps = { loadRestaurants: _loadRestaurants };

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);
