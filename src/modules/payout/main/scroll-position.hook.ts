import { useLayoutEffect } from 'react';

export const usePayoutMainScrollPostion = (pagination: unknown) => {
	useLayoutEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, [pagination]);
};
