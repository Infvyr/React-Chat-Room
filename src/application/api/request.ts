export function fetchRequest<TResponse>(
	url: string,
	config: RequestInit = { headers: { "Content-Type": "application/json" } }
): Promise<TResponse> {
	return fetch(url, config)
		.then((response) => {
			if (!response.ok) {
				throw new Error("Server error!");
			}
			return response.json();
		})
		.then((data) => data as TResponse)
		.catch((err) => {
			throw Error(err);
		});
}

export async function fetcher<JSON = any>(input: RequestInfo, init?: RequestInit): Promise<JSON> {
	return fetch(input, init)
		.then((response) => {
			if (!response.ok) {
				throw new Error("Server error!");
			}
			return response.json();
		})
		.then((data) => data)
		.catch((err) => {
			throw Error(err);
		});
}
