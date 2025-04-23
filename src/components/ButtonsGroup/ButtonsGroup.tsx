import { TypesNotifications, useNotification } from '../common/Notifications';

import MOCK_TEXT from '../../localization/mock-text.json';

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
 * Компонент группы кнопок для вызова разных нотификаций.
 * @returns {JSX.Element}
 * */
export const ButtonsGroup = () => {
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

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '90vh',
			}}
		>
			<div
				style={{
					display: 'flex',
					flexWrap: 'wrap',
					gap: '20px',
					width: 450,
					height: 330,
				}}
			>
				{buttonsList.map(({ title, onClick }, index) => (
					<button
						style={{ width: '150px', wordBreak: 'break-word' }}
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
