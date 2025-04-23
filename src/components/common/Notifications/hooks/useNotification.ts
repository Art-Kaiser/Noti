import { useContext } from 'react';
import { NotificationContext } from '../context/NotificationProvider.tsx';
import { INotificationContext } from '../interfaces/notification-context.interface.ts';

/**
 * Хук для работы с контекстом NotificationContext.
 * @returns {INotificationContext | never} Контекст или ошибка в случае его отсутствия.
 * */
export const useNotification = (): INotificationContext | never => {
	const context = useContext(NotificationContext);

	if (!context)
		throw new Error(
			'useNotification should only be used in NotificationProvider'
		);

	return context;
};
