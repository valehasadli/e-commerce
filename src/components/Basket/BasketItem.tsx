import React from 'react';
import PrimaryButton from '@/components/Shared/PrimaryButton';
import {removeBasket} from "@/services/basketService";
import {ProductItemProps} from "@/types/ProductItemProps";

const BasketItem: React.FC<ProductItemProps> = ({ product }) => {
	const handleRemoveBasket = async () => {
		try {
			await removeBasket(product);
			console.log('Removing from basket:', product.name);
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<div className="border p-4 rounded shadow hover:shadow-lg">
			<img src={product.image} alt={product.name} className="w-full h-32 object-cover"/>
			<h3 className="text-lg font-semibold mt-2">{product.name}</h3>
			<p className="text-gray-700">${product.price.toFixed(2)}</p>
			<p className="text-sm text-gray-600 mt-1">{product.description}</p>
			<PrimaryButton
				onClick={handleRemoveBasket}
				className="mt-4 bg-red-500 hover:bg-reed-700 text-white font-bold py-2 px-4 rounded"
			>
				Remove
			</PrimaryButton>
		</div>
	);
};

export default BasketItem;
