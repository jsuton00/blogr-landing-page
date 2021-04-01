import { useState } from 'react';

export const useToggleNavMenu = () => {
	const [isOpen, setIsOpen] = useState(false);

	const openMenu = () => {
		return setIsOpen(!isOpen);
	};

	const closeMenu = () => {
		return setIsOpen(false);
	};

	return [isOpen, openMenu, closeMenu];
};
