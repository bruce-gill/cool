export interface Filters {
  engineType: string[];
  price: {
    min: number | undefined;
    max: number | undefined;
  };
  topSpeed: number | undefined;
}

