import { ButtonsGroup } from './components/ButtonsGroup/ButtonsGroup.tsx';

import {
	NotificationPosition,
	NotificationProvider,
	NotificationsWrapper,
} from './components/common/Notifications';

import './App.css';
import { useState } from 'react';

export const App = () => {
	const [position, setPosition] = useState<NotificationPosition>(
		NotificationPosition.rightTop
	);

	return (
		<NotificationProvider>
			<ButtonsGroup setPosition={setPosition} />
			<NotificationsWrapper position={position} />
		</NotificationProvider>
	);
};

export default App;
