import React from "react";
import { render } from "@testing-library/react";
import { RestaurantList } from "../RestaurantList";

describe("RestaurantList", () => {
  const restaurants = [
    { id: 1, name: "Pasta Place" },
    { id: 2, name: "Salad Place" },
  ];

  let loadRestaurants: jest.Mock<any, any>;
  let context: any;

  beforeEach(() => {
    loadRestaurants = jest.fn().mockName("loadRestaurants");
    context = render(
      <RestaurantList
        loadRestaurants={loadRestaurants}
        restaurants={restaurants}
      />,
    );
  });

  it("should load restaurants on first render", () => {
    expect(loadRestaurants).toHaveBeenCalled();
  });

  it("should display the restaurants", () => {
    const { queryByText } = context;

    expect(queryByText("Pasta Place")).not.toBeNull();
    expect(queryByText("Salad Place")).not.toBeNull();
  });
});
