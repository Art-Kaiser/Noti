import { FC, ReactElement } from 'react';

import styles from './NotificationsWrapper.module.css';
import classNames from 'classnames';
import { Notification } from '../Notification/Notification.tsx';
import { useNotification } from '../../hooks/useNotification.ts';

import { NotificationPosition } from '../../enums/NotificationPosition.enum.ts';
import { TypesNotifications } from '../../enums/TypesNotifications.enum.ts';

import SuccessfulIcon from '../../../../../assets/icons/notification-icons/successful-notification-icon.svg';
import InfoIcon from '../../../../../assets/icons/notification-icons/info-notification-icon.svg';
import ErrorIcon from '../../../../../assets/icons/notification-icons/error-notification-icon.svg';

/**
 * Интерфейс компонента-обёртки для работы с уведомлениями.
 * @property {NotificationPosition | undefined} position - Позиция уведомлений.
 * @property {boolean | undefined} autoDeletion - Автоматическое удаление уведомления.
 * @property {number | undefined} delay - Задержка перед удалением уведомления.
 * @property {string | undefined} classNameNotification - Стили для уведомления.
 * */
interface INotificationsWrapper {
	position?: NotificationPosition;
	autoDeletion?: boolean;
	delay?: number;
	classNameNotification?: string;
}

/**
 * Компонент-обёртка для работы с уведомлениями.
 * @param {INotificationsWrapper} props - Пропсы компонента.
 * @returns {JSX.Element}
 * */
export const NotificationsWrapper: FC<INotificationsWrapper> = ({
	delay,
	autoDeletion,
	classNameNotification,
	position = NotificationPosition.rightTop,
}) => {
	const { notification } = useNotification();

	/**
	 * Возвращает иконку в зависимости от типа.
	 * @param {TypesNotifications | undefined} type - Тип уведомления.
	 * @returns {ReactElement | null} Иконка или пустое значение.
	 * */
	const renderIcon = (type?: TypesNotifications): ReactElement | null => {
		switch (type) {
			case TypesNotifications.info:
				return <InfoIcon />;
			case TypesNotifications.successful:
				return <SuccessfulIcon />;
			case TypesNotifications.error:
				return <ErrorIcon />;
			default:
				return null;
		}
	};

	return (
		<div className={classNames(styles.notifications, styles[position])}>
			{notification.map(
				({
					title,
					text,
					id,
					type,
					content,
					autoDeletion: individualAutoDeletion,
					delay: individualDelay,
					icon,
				}) => (
					<Notification
						key={id}
						id={id}
						type={type}
						icon={icon ?? renderIcon(type)}
						delay={individualDelay ?? delay}
						autoDeletion={individualAutoDeletion ?? autoDeletion}
						title={title}
						text={text}
						content={content}
						position={position}
						classNameNotification={classNameNotification}
					/>
				)
			)}
		</div>
	);
};
