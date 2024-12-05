export interface Motorcycle {
  id: string;
  name: string;
  image: string;
  topSpeed: number;
  motorType: 'Gas' | 'Electric';
  price: {
    min: number;
    max: number;
  };
  utility: string;
}

