import React, {useMemo} from 'react';
import ProductItem from './ProductItem';
import useFetch from '@/hooks/useFetch';
import {Product} from '@/types/Product';

const ProductList: React.FC = () => {
	const options = useMemo(() => ({
		method: 'GET' as const,
		headers: { 'Content-Type': 'application/json' },
	}), []);

	const {
		data: products,
		isLoading,
		error,
	} = useFetch<Product[]>('http://localhost:8000/products', options);

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
			{products?.map((product) => (
				<ProductItem key={product.id} product={product} />
			))}
		</div>
	);
};

export default ProductList;
