import { ButtonsGroup } from './components/ButtonsGroup/ButtonsGroup.tsx';

import {
	NotificationProvider,
	NotificationsWrapper,
} from './components/common/Notifications';

import './App.css';

export const App = () => {
	return (
		<NotificationProvider>
			<ButtonsGroup />
			<NotificationsWrapper />
		</NotificationProvider>
	);
};

export default App;
