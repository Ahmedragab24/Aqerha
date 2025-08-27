export interface FavoriteType {
  id: number;
  title: string;
  rooms: number;
  bathrooms: number;
  area: string;
  price: string;
  main_image: string;
  user: {
    id: number;
    name: string;
    image: string;
  };
}
