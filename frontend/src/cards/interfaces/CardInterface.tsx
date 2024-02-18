import ImageInterface from "./ImageInterface";

interface CardInterface {
  _id: string;
  title: string;
  description: string;
  price: number;
  image: ImageInterface;
}
export default CardInterface;