import { ImageSourcePropType } from "react-native";

export interface Listing {
    id: number;
    title: string;
    price: number;
    image: ImageSourcePropType;
}

export interface Message {
    id: number;
    title: string;
    description: string;
    image: ImageSourcePropType
}
