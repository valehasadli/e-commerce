import React, { useState, ReactNode, MouseEvent } from 'react';

type ButtonProps = {
	children: ReactNode;
	onClick: (setLoading: (isLoading: boolean) => void) => Promise<void>;
	className?: string;
	disabled?: boolean; // New prop to manage disabled state externally
	minimumLoadingTime?: number; // Optional prop for minimum loading time
};

const PrimaryButton: React.FC<ButtonProps> = ({ children, onClick, className, disabled, minimumLoadingTime = 1000 }) => {
	const [isLoading, setLoading] = useState(false);

	const handleClick = async (event: MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		if (disabled) return; // Prevent action if button is disabled
		setLoading(true);
		const startTime = Date.now();

		try {
			await onClick(setLoading);
		} finally {
			const elapsedTime = Date.now() - startTime;
			const delay = Math.max(minimumLoadingTime - elapsedTime, 0);
			setTimeout(() => setLoading(false), delay);
		}
	};

	return (
		<button
			onClick={handleClick}
			className={`${className} ${isLoading ? 'opacity-75' : ''} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
			disabled={isLoading || disabled}
		>
			{isLoading ? 'Loading...' : children}
		</button>
	);
};

export default PrimaryButton;
