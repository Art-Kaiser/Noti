import { FC, ReactElement } from 'react';

import styles from './NotificationsWrapper.module.css';
import classNames from 'classnames';
import { Notification } from '../Notification/Notification.tsx';
import { useNotification } from '../hooks/useNotification.ts';

import { PositionNotifications } from '../enums/PositionNotifications.enum.ts';
import { TypesNotification } from '../enums/TypesNotification.enum.ts';

import SuccessfulIcon from '../../../../assets/icons/notification-icons/successful-notification-icon.svg';
import InfoIcon from '../../../../assets/icons/notification-icons/info-notification-icon.svg';
import ErrorIcon from '../../../../assets/icons/notification-icons/error-notification-icon.svg';

interface INotificationsWrapper {
	position?: PositionNotifications;
	autoDeletion?: boolean;
	delay?: number;
	classNameNotification?: string;
}
export const NotificationsWrapper: FC<INotificationsWrapper> = ({
	delay,
	autoDeletion,
	classNameNotification,
	position = PositionNotifications.rightTop,
}) => {
	const { notification } = useNotification();

	const renderIcon = (type?: TypesNotification): ReactElement | null => {
		switch (type) {
			case TypesNotification.info:
				return <InfoIcon />;
			case TypesNotification.successful:
				return <SuccessfulIcon />;
			case TypesNotification.error:
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
