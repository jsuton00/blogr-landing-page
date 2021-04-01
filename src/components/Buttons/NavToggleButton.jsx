import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';

export const NavBurgerButton = (props) => {
	const { buttonValue, openMenu, closeMenu } = props;

	const handleToggle = () => {
		if (buttonValue === false) {
			openMenu();
		} else {
			closeMenu(buttonValue);
		}
	};

	return (
		<div className="nav-collapse-section">
			<button
				id="nav-burger-button"
				name="nav-burger-button"
				type="button"
				onClick={handleToggle}
			>
				<span className="nav-button-icon">
					{buttonValue === true ? <AiOutlineClose /> : <FaBars />}
				</span>
			</button>
		</div>
	);
};
