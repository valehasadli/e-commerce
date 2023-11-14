import React, { useEffect, useState } from 'react';
import useFetch from '@/hooks/useFetch';
import { Product } from '@/types/Product';
import BasketItem from "@/components/Basket/BasketItem";
import { basketEmitter } from '@/services/basketService';

const BasketList: React.FC = () => {
	const { data, isLoading, error } = useFetch<Product[]>('http://localhost:8000/basket');
	const [basketProducts, setBasketProducts] = useState<Product[]>([]);

	useEffect(() => {
		if (data) {
			setBasketProducts(data);
		}
	}, [data]);

	useEffect(() => {
		const removeSub = basketEmitter.subscribe('removeBasket', (product: Product) => {
			setBasketProducts(currentProducts =>
				currentProducts.filter(currentProduct => currentProduct.id !== product.id)
			);
		});

		return () => {
			removeSub();
		};
	}, []);

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
			{basketProducts.map((product) => (
				<BasketItem key={product.id} product={product} />
			))}
		</div>
	);
};

export default BasketList;
