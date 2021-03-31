import { useState, useEffect } from 'react';

export const useNavLinks = (navLinks) => {
	const [navTitleLinks, setNavTitleLinks] = useState('');

	useEffect(() => {
		const timer = setTimeout(() => {
			if (navLinks && navLinks.length > 0) {
				return setNavTitleLinks(navLinks);
			}
		});

		return () => {
			clearTimeout(timer);
		};
	}, [navLinks]);

	return [navTitleLinks];
};

export const useToggleDropdown = (toggleValue) => {
	const [isOpen, setIsOpen] = useState(toggleValue || false);

	const toggleDropdown = (isOpen) => {
		if (isOpen === false) {
			return setIsOpen(true);
		} else if (isOpen === true) {
			return setIsOpen(false);
		} else {
			return isOpen;
		}
	};

	return [isOpen, toggleDropdown];
};
