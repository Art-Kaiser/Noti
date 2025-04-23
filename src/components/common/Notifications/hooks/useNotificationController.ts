import { useState } from 'react';
import {
	INotificationOptions,
	INotificationWithId,
} from '../interfaces/notification.interface.ts';
import { INotificationContext } from '../interfaces/notification-context.interface.ts';
import { NUMBER_OF_DELETED, QUANTITY_DISPLAYED } from '../constants';

/**
 * Интерфейс настроек для хука работы с уведомлениями.
 * @property {number | undefined} quantityDisplayed - Отображаемое количество.
 * @property {number | undefined} numberOfDeletedItems - Количество удаляемых элементов.
 * */
interface INotificationController {
	quantityDisplayed?: number;
	numberOfDeletedItems?: number;
}

/**
 * Хук для работы со списоком уведомлений.
 * @param {INotificationController}
 * @returns {INotificationContext} Методы изменения списка уведомлений.
 * */
export const useNotificationController = ({
	quantityDisplayed = QUANTITY_DISPLAYED,
	numberOfDeletedItems,
}: INotificationController): INotificationContext => {
	const [notification, setNotification] = useState<INotificationWithId[]>([]);

	/**
	 * Генерирует уникальный идентификатор уведомления.
	 * @returns {string} Уникальный идентификатор.
	 * */
	const generateNotificationId = (): string => crypto.randomUUID();

	/**
	 * Создать уведомление с идентификатором.
	 * @param {INotificationOptions} notificationOptions - Параметры уведомления.
	 * @returns {INotificationWithId} Уведомление с идентификатором.
	 * */
	const createNotificationWithId = (
		notificationOptions: INotificationOptions
	): INotificationWithId => {
		return { ...notificationOptions, id: generateNotificationId() };
	};

	/**
	 * Добавляет уведомление в список уведомлений для отображения.
	 * @param {INotificationOptions} notificationOptions - Параметры уведомления.
	 * @returns Void.
	 * */
	const addNotificationList = (
		notificationOptions: INotificationOptions
	): void => {
		setNotification((prev) => {
			if (prev.length === quantityDisplayed) {
				return [
					...prev.slice(
						Math.abs(numberOfDeletedItems ?? NUMBER_OF_DELETED)
					),
					createNotificationWithId(notificationOptions),
				];
			}

			return [...prev, createNotificationWithId(notificationOptions)];
		});
	};

	/**
	 * Удаляет уведомление.
	 * @param {string} id - Идентификатор уведомления.
	 * @returns Void.
	 * */
	const removeNotification = (id: string): void => {
		setNotification((prev) =>
			prev.filter((notification) => notification.id !== id)
		);
	};

	/**
	 * Очищает список отображаемых уведомлений.
	 * @returns Void.
	 * */
	const clearNotificationList = (): void => {
		setNotification([]);
	};

	return {
		notification,
		add: addNotificationList,
		remove: removeNotification,
		removeAll: clearNotificationList,
	};
};
