import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router';

const usePrevious = (value) => {
	const locationRef = useRef();

	useEffect(() => {
		if (value) {
			locationRef.current = value;
		}
	});

	return locationRef.current;
};

export const useLocationChange = (action) => {
	const location = useLocation();
	const previousLocation = usePrevious(location);

	useEffect(() => {
		if (location && previousLocation) {
			action(location, previousLocation);
		}
	}, [action, location, previousLocation]);
};
