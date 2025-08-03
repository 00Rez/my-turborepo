export type GridCarsModel = {
  make: string;
  model: string;
  price: number;
  year: number;
};

export type GridProps = {
  items: GridCarsModel[];
}
