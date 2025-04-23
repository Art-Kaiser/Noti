import { createContext, FC, ReactElement } from 'react';

import { INotificationContext } from '../interfaces/notification-context.interface.ts';
import { useNotificationController } from '../hooks/useNotificationController.ts';

/**
 * Интерфейс провайдера контекста.
 * @property {ReactElement | ReactElement[]} children - React-элементы.
 * @property {number | undefined} numberOfDeletedItems - Количество удаляемых элементов.
 * @property {number | undefined} quantityDisplayed - Отображаемое количество.
 * */
interface INotificationProvider {
	children: ReactElement | ReactElement[];
	numberOfDeletedItems?: number;
	quantityDisplayed?: number;
}

/**
 * Создание контекста.
 * @returns {Context<INotificationContext | undefined>}
 * */
export const NotificationContext = createContext<
	INotificationContext | undefined
>(undefined);

/**
 * Компонент провайдер контекста для работы с уведомлениями.
 * @param {INotificationProvider} props - Пропсы компонента.
 * @returns {JSX.Element}
 * */
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
