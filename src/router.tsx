import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductList from '@/components/ProductList/ProductList';
import BasketList from "@/components/Basket/BasketList";

const AppRoutes: React.FC = () => {
	return (
		<Routes>
			<Route path="/" element={<ProductList />} />
			<Route path="/basket" element={<BasketList />} />
		</Routes>
	);
};

export default AppRoutes;
