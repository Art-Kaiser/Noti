import { Dispatch, FC, SetStateAction } from 'react';

import {
	NotificationPosition,
	TypesNotifications,
	useNotification,
} from '../common/Notifications';

import MOCK_TEXT from '../../localization/mock-text.json';

import styles from './ButtonsGroup.module.css';

/**
 * Компонент тестового списка.
 * @returns {JSX.Element}
 * */
const ListComponent = () => {
	return (
		<div>
			<p>Для теста компонента</p>
			<ul>
				<li>Проверьте пункт 1</li>
				<li>Проверьте пункт 2</li>
				<li>Проверьте пункт 3</li>
				<li>Проверьте пункт 4</li>
			</ul>
		</div>
	);
};

/**
 * Интерфейс группы кнопок
 * @property {Dispatch<SetStateAction<NotificationPosition>>} setPosition - Изменение позиции.
 * */
interface IButtonsGroup {
	setPosition: Dispatch<SetStateAction<NotificationPosition>>;
}

/**
 * Компонент группы кнопок для вызова разных нотификаций.
 * @param {IButtonsGroup} props - Пропсы компонента.
 * @returns {JSX.Element}
 * */
export const ButtonsGroup: FC<IButtonsGroup> = ({ setPosition }) => {
	const { add, removeAll } = useNotification();

	const buttonsList = [
		{
			title: 'нейтральное',
			onClick: () =>
				add({
					title: MOCK_TEXT.neutralTitle,
					text: MOCK_TEXT.neutralMessage,
				}),
		},
		{
			title: 'информационное',
			onClick: () =>
				add({
					type: TypesNotifications.info,
					title: MOCK_TEXT.infoTitle,
					text: MOCK_TEXT.infoMessage,
				}),
		},
		{
			title: 'информационное с доп. уведомлением',
			onClick: () => {
				add({
					type: TypesNotifications.successful,
					title: MOCK_TEXT.successfulTitle,
					text: MOCK_TEXT.successfulMessage,
				});
				add({
					type: TypesNotifications.info,
					title: MOCK_TEXT.infoTitle,
					autoDeletion: false,
					content: <ListComponent />,
				});
			},
		},
		{
			title: 'информационное с доп. уведомлением + авто удаление',
			onClick: () => {
				add({
					type: TypesNotifications.successful,
					title: MOCK_TEXT.successfulTitle,
					text: MOCK_TEXT.successfulMessage,
				});

				add({
					type: TypesNotifications.info,
					title: MOCK_TEXT.infoTitle,
					text: MOCK_TEXT.infoMessage,
				});
			},
		},
		{
			title: 'успешное',
			onClick: () =>
				add({
					type: TypesNotifications.successful,
					title: MOCK_TEXT.successfulTitle,
					text: MOCK_TEXT.successfulMessage,
				}),
		},
		{
			title: 'быстрое с маленькой задержкой',
			onClick: () =>
				add({
					type: TypesNotifications.successful,
					title: MOCK_TEXT.successfulTitle,
					text: MOCK_TEXT.successfulMessage,
					delay: 500,
				}),
		},
		{
			title: 'ошибка',
			onClick: () =>
				add({
					type: TypesNotifications.error,
					title: MOCK_TEXT.errorTitle,
					text: MOCK_TEXT.errorMessage,
				}),
		},
		{
			title: 'ошибка с длинным текстом',
			onClick: () =>
				add({
					type: TypesNotifications.error,
					title: MOCK_TEXT.errorTitle,
					text: MOCK_TEXT.longText,
				}),
		},
		{
			title: 'очистить',
			onClick: () => removeAll(),
		},
	];

	const selectPosition = (position: NotificationPosition) => {
		let selected = NotificationPosition.rightTop;
		switch (position) {
			case NotificationPosition.rightTop:
				selected = NotificationPosition.rightTop;
				break;
			case NotificationPosition.rightBottom:
				selected = NotificationPosition.rightBottom;
				break;
			case NotificationPosition.topCenter:
				selected = NotificationPosition.topCenter;
				break;
			case NotificationPosition.bottomCenter:
				selected = NotificationPosition.bottomCenter;
				break;
			case NotificationPosition.leftTop:
				selected = NotificationPosition.leftTop;
				break;
			case NotificationPosition.leftBottom:
				selected = NotificationPosition.leftBottom;
				break;
			default:
				selected = NotificationPosition.rightTop;
				break;
		}

		setPosition(selected);
	};

	return (
		<div className={styles.buttonGroup}>
			<div className={styles.buttonsPosition}>
				<div className={styles.sides}>
					<button
						onClick={() =>
							selectPosition(NotificationPosition.leftTop)
						}
					>
						<span>Слева-сверху</span>
					</button>
					<button
						onClick={() =>
							selectPosition(NotificationPosition.rightTop)
						}
					>
						<span>Справа-сверху</span>
					</button>
					<button
						onClick={() =>
							selectPosition(NotificationPosition.leftBottom)
						}
					>
						<span>Слева-снизу</span>
					</button>
					<button
						onClick={() =>
							selectPosition(NotificationPosition.rightBottom)
						}
					>
						<span>Справа-снизу</span>
					</button>
				</div>
				<div className={styles.centerPosition}>
					<button
						onClick={() =>
							selectPosition(NotificationPosition.topCenter)
						}
					>
						<span>Сверху по центру</span>
					</button>
					<button
						onClick={() =>
							selectPosition(NotificationPosition.bottomCenter)
						}
					>
						<span>Снизу по центру</span>
					</button>
				</div>
			</div>
			<div className={styles.messageButton}>
				{buttonsList.map(({ title, onClick }, index) => (
					<button
						style={{ width: '150px' }}
						key={index}
						type={'button'}
						onClick={onClick}
					>
						{title}
					</button>
				))}
			</div>
		</div>
	);
};
