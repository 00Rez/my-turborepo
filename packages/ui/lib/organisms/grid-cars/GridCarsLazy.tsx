import { lazy } from "react";

export const GridCarsLazy = lazy(() => import("./GridCars").then((module) => {
  return { default: module.GridCars };
}));
