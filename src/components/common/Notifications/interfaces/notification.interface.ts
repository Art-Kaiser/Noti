import React, { ReactElement } from 'react';
import { TypesNotification } from '../enums/TypesNotification.enum.ts';
import { PositionNotifications } from '../enums/PositionNotifications.enum.ts';

export interface INotificationOptions {
	type?: TypesNotification;
	title: string;
	text?: string;
	icon?: ReactElement | null;
	content?: React.ReactElement | React.ReactElement[];
	delay?: number;
	autoDeletion?: boolean;
}

export interface INotification extends INotificationOptions {
	position?: PositionNotifications;
	classNameNotification?: string;
}

export interface INotificationWithId extends INotification {
	id: string;
}
