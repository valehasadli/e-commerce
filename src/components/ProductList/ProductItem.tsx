import React, { useState } from 'react';
import PrimaryButton from '@/components/Shared/PrimaryButton';
import { addBasket } from "@/services/basketService";
import { ProductItemProps } from "@/types/ProductItemProps";

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
	const [isAdded, setIsAdded] = useState(false);

	const handleAddToBasket = async () => {
		try {
			await addBasket(product);
			setIsAdded(true);
			console.log('Adding to basket:', product.name);
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
				onClick={handleAddToBasket}
				className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
				disabled={isAdded}
			>
				{isAdded ? 'Added' : 'Add to Cart'}
			</PrimaryButton>
		</div>
	);
};

export default ProductItem;
