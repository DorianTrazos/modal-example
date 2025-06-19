import { createPortal } from 'react-dom';

const Modal = ({ children }) => {
	if (!children) return;

	return createPortal(
		<div
			style={{
				position: 'fixed',
				width: '100vw',
				height: '100vh',
				backgroundColor: 'rgb(255 0 128 / .5)'
			}}
		>
			{children}
		</div>,
		document.getElementById('modal')
	);
};

export default Modal;
