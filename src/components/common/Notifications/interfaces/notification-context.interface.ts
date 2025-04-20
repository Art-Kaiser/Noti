import {
	INotificationOptions,
	INotificationWithId,
} from './notification.interface.ts';

export interface INotificationContext {
	notification: INotificationWithId[];
	add: (notificationOptions: INotificationOptions) => void;
	remove: (id: string) => void;
	removeAll: () => void;
}
