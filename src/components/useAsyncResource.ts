import { useCallback, useEffect, useState } from 'react';
import { cancelRender, continueRender, delayRender } from 'remotion';

export const useAsyncResource = <T>(fetcher: () => Promise<T>) => {
	const [data, setData] = useState<T | null>(null);
	const [handle] = useState(() => delayRender());

	const fetchData = useCallback(async () => {
		try {
			setData(await fetcher());

			continueRender(handle);
		} catch (err) {
			cancelRender(err);
		}
	}, [handle]);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	return data;
};
