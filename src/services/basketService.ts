import Emitter from 'blink-hub';
import { BasketEvents } from '@/types/BasketEvents';
import { Product } from '@/types/Product';

const basketEmitter = new Emitter<BasketEvents>();

const addBasket = async (product: Product): Promise<void> => {
	try {
		const response = await fetch('http://localhost:8000/basket', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(product),
		});

		if (!response.ok) {
			throw new Error('Failed to add product to basket');
		}

		basketEmitter.emit('addBasket', product);
	} catch (error) {
		console.error(error);
		basketEmitter.emit('removeBasket', product);
	}
};

const removeBasket = async (product: Product): Promise<void> => {
	try {
		const response = await fetch(`http://localhost:8000/basket/${product.id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (!response.ok) {
			throw new Error('Failed to remove product from basket');
		}

		// Emit event after successful removal
		basketEmitter.emit('removeBasket', product);
	} catch (error) {
		console.error('Error removing product from basket:', error);
		basketEmitter.emit('addBasket', product);
	}
};

export { basketEmitter, addBasket, removeBasket };
