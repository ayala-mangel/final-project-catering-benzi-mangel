import ImageInterface from "./ImageInterface";

interface CardInterface {
  _id: string;
  title: string;
  description: string;
  price: number;
  image: File | ImageInterface | null;
}
export default CardInterface;
