import { ImageSourcePropType } from "react-native";

export interface Listing {
    id: number;
    title: string;
    price: number;
    image: ImageSourcePropType;
}

export interface ListingEditFormValues {
    title: string;
    price: number;
    category: string;
    description?: string;
}

export interface RegisterFormValues {
    name: string
    email: string;
    password: string;
}

export interface LoginFormValues extends RegisterFormValues {}

export interface Message {
    id: number;
    title: string;
    description: string;
    image: ImageSourcePropType
}
