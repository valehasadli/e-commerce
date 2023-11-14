import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { LayoutProps } from '@/types/LayoutProps';
import { basketEmitter } from '@/services/basketService';

const Layout: React.FC<LayoutProps> = ({ children }) => {
	const [basketCount, setBasketCount] = useState(0);

	useEffect(() => {
		const handleProductAdded = () => {
			setBasketCount(prevCount => prevCount + 1);
		};

		const handleProductRemoved = () => {
			setBasketCount(prevCount => prevCount - 1);
		};

		const addSubscription = basketEmitter.subscribe('addBasket', handleProductAdded);
		const removeSubscription = basketEmitter.subscribe('removeBasket', handleProductRemoved);

		return () => {
			addSubscription();
			removeSubscription();
		};
	}, []);

	return (
		<div className="font-sans">
			<nav className="bg-gray-800 p-4">
				<ul className="flex justify-center space-x-4">
					<li>
						<Link
							to="/"
							className="text-white hover:text-gray-300 text-lg"
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							to="/basket"
							className="text-white hover:text-gray-300 text-lg"
						>
							Basket {basketCount > 0 && `(${basketCount})`}
						</Link>
					</li>
				</ul>
			</nav>
			<main className="p-4">
				{children}
			</main>
		</div>
	);
};

export default Layout;
