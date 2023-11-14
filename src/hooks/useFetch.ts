import { useState, useEffect } from 'react';

type UseFetchOptions = {
	method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
	headers?: Record<string, string>;
	body?: any;
};

type UseFetchReturnType<T> = {
	data: T | null;
	isLoading: boolean;
	error: Error | null;
};

function useFetch<T>(url: string, options: UseFetchOptions = {}): UseFetchReturnType<T> {
	const [data, setData] = useState<T | null>(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			try {
				const response = await fetch(url, {
					method: options.method ?? 'GET',
					headers: options.headers,
					body: options.method !== 'GET' && options.body ? JSON.stringify(options.body) : null,
				});

				if (!response.ok) {
					throw new Error(response.statusText);
				}

				const jsonData = await response.json();
				setData(jsonData);
			} catch (err) {
				setError(err as Error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, [url, options.method, options.headers, options.body]);

	return { data, isLoading, error };
}

export default useFetch;
