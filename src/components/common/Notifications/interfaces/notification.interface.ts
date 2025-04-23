import React, { ReactElement } from 'react';
import { TypesNotifications } from '../enums/TypesNotifications.enum.ts';
import { NotificationPosition } from '../enums/NotificationPosition.enum.ts';

/**
 * Интерфейс настроек для создания уведомления.
 * @property {string} title - Заголовок уведомления.
 * @property {TypesNotifications | undefined} type - Тип уведомления.
 * @property {string | undefined} text - Текстовый контент уведомления.
 * @property {ReactElement | null | undefined} icon - Иконка.
 * @property {React.ReactElement | React.ReactElement[] | undefined} content - Контент уведомления.
 * @property {number | undefined} delay - Задержка перед удалением уведомления.
 * @property {boolean | undefined} autoDeletion - Автоматическое удаление уведомления.
 * */
export interface INotificationOptions {
	title: string;
	type?: TypesNotifications;
	text?: string;
	icon?: ReactElement | null;
	content?: React.ReactElement | React.ReactElement[];
	delay?: number;
	autoDeletion?: boolean;
}

/**
 * Интерфейс уведомления.
 * @property {NotificationPosition | undefined} position - Позиция уведомлений.
 * @property {string | undefined} classNameNotification - Стили для уведомления.
 * */
export interface INotification extends INotificationOptions {
	position?: NotificationPosition;
	classNameNotification?: string;
}

/**
 * Интерфейс уведомления с уникальным идентификатором.
 * @property {string} id - Уникальный идентификатор.
 * */
export interface INotificationWithId extends INotification {
	id: string;
}
