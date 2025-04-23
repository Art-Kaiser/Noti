import {
	INotificationOptions,
	INotificationWithId,
} from './notification.interface.ts';

/**
 * Интерфейс контекста.
 * @property {INotificationWithId[]} notification - Список уведомлений.
 * @property {(notificationOptions: INotificationOptions) => void} add - Добавление уведомления.
 * @property {(id: string) => void} remove - Удаление уведомления по идентификатору.
 * @property {() => void} removeAll - Удаление всех уведомлений.
 * */
export interface INotificationContext {
	notification: INotificationWithId[];
	add: (notificationOptions: INotificationOptions) => void;
	remove: (id: string) => void;
	removeAll: () => void;
}
