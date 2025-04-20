import { useContext } from 'react';
import { NotificationContext } from '../context/NotificationProvider.tsx';
import { INotificationContext } from '../interfaces/notification-context.interface.ts';

export const useNotification = (): INotificationContext | never => {
	const context = useContext(NotificationContext);

	if (!context)
		throw new Error(
			'useNotification should only be used in NotificationProvider'
		);

	return context;
};
