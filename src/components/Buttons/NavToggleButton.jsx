import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import '../../styles/components/buttons/navMenuButton.css';

export const NavBurgerButton = (props) => {
	const { buttonValue, openMenu } = props;

	const handleClick = (e) => {
		return openMenu(e.target.value);
	};

	return (
		<div className="nav-collapse-section">
			<button
				id="nav-burger-button"
				name="nav-burger-button"
				type="button"
				className="nav-menu-button"
				onClick={handleClick}
				value={buttonValue}
			>
				<span className="nav-menu-btn-icon">
					{buttonValue === true ? <AiOutlineClose /> : <FaBars />}
				</span>
			</button>
		</div>
	);
};
