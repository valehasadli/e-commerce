import {Product} from "@/types/Product";

export type BasketEvents = {
	addBasket: (product: Product) => void;
	removeBasket: (product: Product) => void;
};