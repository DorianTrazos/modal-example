import { useState } from 'react';
import Modal from './components/modal/Modal';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	const [modalContent, setModalContent] = useState();
	return (
		<div>
			<GlobalStyles />

			<button
				style={{
					position: 'absolute',
					zIndex: 10
				}}
				onClick={() => setModalContent(<h1>MODAL DE ABBY</h1>)}
			>
				Open Modal
			</button>
			<Modal>{modalContent}</Modal>
		</div>
	);
};

export default App;
