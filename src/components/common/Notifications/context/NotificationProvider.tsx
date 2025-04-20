import { createContext, FC, ReactElement } from 'react';

import { INotificationContext } from '../interfaces/notification-context.interface.ts';
import { useNotificationController } from '../hooks/useNotificationController.ts';

interface INotificationProvider {
	children: ReactElement | ReactElement[];
	numberOfDeletedItems?: number;
	quantityDisplayed?: number;
}

export const NotificationContext = createContext<
	INotificationContext | undefined
>(undefined);

export const NotificationProvider: FC<INotificationProvider> = ({
	children,
	quantityDisplayed,
	numberOfDeletedItems,
}) => {
	const notificationController = useNotificationController({
		quantityDisplayed,
		numberOfDeletedItems,
	});

	return (
		<NotificationContext.Provider value={notificationController}>
			{children}
		</NotificationContext.Provider>
	);
};
