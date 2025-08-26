"use server";

import { authenticate } from "@/util/authenticate";
import data from "../../util/movies.json";
import { MoviesModel } from "./components/GridTest";

export const fetchItems = async (from: number, to: number) => {
  await authenticate();
  return new Promise<{
    items: MoviesModel[];
    totalCount: number;
  }>((resolve) => {
    // Simulate an API call
    setTimeout(async () => {
      const items = data as MoviesModel[];
      const _items = (items as MoviesModel[]).slice(
        from,
        to
      );
      console.log("fetched items", { from, to });
      resolve({
        items: _items,
        totalCount: items.length
      });
    }, 100);
  });
}