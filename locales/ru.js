export default {

	// Other
	save: 'Сохранить',
	copied: '"{0}" скопировано',
	default: 'По умолчанию',
	cancel: 'Отменить',
	delete: 'Удалить',

	// Авторизаця / Регистрация
	log_out: 'Выйти',
	log_in: 'Войти',
	sign_up: 'Регистрация',
	login: 'Логин',
	login_placeholder: 'Ваш ник или фамилия',
	login_validation: 'Допускаются только латиница, цифры, знаки "_" и "-", не должен содержать "umi" или "pzm", максимум 32 символа',
	login_invalid: 'Такого логина не существует или он введён неверно',
	password: 'Пароль',
	password_placeholder: "Введите пароль",
	password_validation: "Пароль должен содержать хотя бы одну латинскую букву в нижнем регистре, одну в верхнем регистре и содержать более 6 символов.",
	password_invalid: 'Неправльный пароль',
	telegram_validation: 'Напишите ваш ник в телеграме в формате "Username"',
	fillAll: 'Заполните все поля!',
	welcome_leader: 'Добро пожаловать, {0}!',
	welcome_back_leader: 'С возвращением, {0}!',
	leader_exists: 'Пользователь с таким ником уже существует',
	wrong_data: 'Номер или пароль введены некорректно, проверьте правильность данных!',

	account_saved: 'Изменения сохранены!',

	// Header
	searchContacts: 'Поиск контактов...',
	tomain: 'На главную',

	// Notifications
	noti: {
		gotit: 'Понятно',
		noti_bot: 'Для оповещений перейдите в <a target="_blank" href="https://t.me/roy_helper_notify_bot?start={0}">@roy_helper_notify_bot</a> и нажмите "Начать"'
	},

	// Title bar
	title: {
		dashboard: 'Панель управления',
		profile: 'Аккаунт',
		promo: 'Промо материалы',
		funnel: 'Воронка рефералов',
		form: 'Заявки с формы',
		"contact-new": 'Создать контакт',
		"contact-id": 'Редактировать контакт {0}',
		tree: 'Структура'
	},

	// Aside
	aside: {
		roysupport: '<b>РОЙ</b> Помощник',
		main: 'Основное',
		dashboard: 'Панель',
		profile: 'Настройки',
		promo: 'Лэндинг',
		referrals: 'Рефералы',
		funnel: 'Воронка',
		form: 'Заявки с формы',
		add: 'Добавить',
		tree: 'Структура',
		info: 'Информация',
		wallet: 'Кошелёк',
		blockchain: 'Блокчейн',
		tech_support: 'Тех. поддержка'
	},

	// Dashboard
	chart: {
		events: 'События недели',
		added: 'Добавлено',
		new: 'Новых контактов',
		SIGEN: 'Кошельков SIGEN',
		ROY: 'Кошельков ROY',
		PRIZM: 'Покупают PRIZM',
		club: 'Вступили в Клуб',
		date: 'Дата',
		add: 'Доб.',
		cont: 'Конт.',
		purchase: 'Покупка',
		club: 'Клуб',
		amount: 'Сумма'
	},
	dash: {
		invited: 'Пригласили',
		in_club: 'В клубе',
		koi_tooltip: 'Процент людей, которые полностью прошли  воронку вступления в клуб.'
	},

	// Profile
	profile: {
		verify: 'Укажите свой реф-номер PRIZM или UMI в Клубе, это обязательно, чтобы верифицировать свой аккаунт',
		not_all: 'Не все поля заполнены согласно требованиям!',
		socials: {
			required: 'Поля Имя, Номер телефона и Логин Telegram обязательны для заполнения!',
			title: 'Данные для рефералов',
			desc1: 'Эти контакты увидят рефералы перед регистрацией, а также если у них возникнут проблемы во время процесса регистрации.',
			desc2: 'Также эти данные появятся на вашем персональном лэндинге!',
			name: 'Как вас зовут?',
			name_validation: 'Разрешены цифры, буквы и символ пробела!',
			phone: 'Номер телефона',
			phone_validation: 'Разрешены цифры, знак "+", скобки!',
			telegram: 'Telegram профиль',
			telegram_validation: 'Разрешена латиница, цифры, знаки "-", "_"! Вводите именно Имя пользователя без символа "@"',
			instagram: 'Instagram профиль',
			other_validation: 'Разрешена латиница, цифры, знаки "-", "_", "."!',
			vk: 'Профиль Вконтакте',
			whatsapp: 'Номер WhatsApp',
			viber: 'Номер Viber'
		},
		settings: {
			title: 'Ваш профиль',
			not_verified: 'Кошелек не верифицирован!',
			verified: 'Кошелек верифицирован',
			message: 'Сообщение:',
			signature: 'Подпись',
			success: 'Вы успешно верифицировали аккаунт!',
			error: 'Неверная подпись',
			desc: 'Это число в конце вашей реф. ссылки в кабинете roy.club (12345)',
			y_metric: 'Метрика для лэндинга',
			y_placeholder: 'Вместо этой надписи вы можете указать код яндекс метрики, чтобы отслеживать более подробную статистику посещений вашего лэндинга.',
			design_title: 'Дизайн лэндинга',
			design_desc: 'Эти настройки пока что заблокированы, мы тестируем и разрабатываем несколько лэндингов, которые можно будет менять под свою аудиторию.',
			design: 'Выберите лэндинг',
			designs: {
				1: 'Стандартный',
				2: 'Универсальный'
			},
			umi: {
				ref: 'Реф. номер UMI',
				wallet: 'Ваш кошелёк UMI',
				verify: 'Верифицировать кошелёк UMI'
			},
			pzm: {
				ref: 'Реф. номер PRIZM',
				wallet: 'Ваш кошелёк PRIZM',
				verify: 'Верифицировать кошелёк PRIZM'
			},
		},
		videos: {
			video: 'Видео #{0}',
			url: 'Ссылка или ID видео YouTube',
			title: 'Короткое название видео',
			description: 'Описание для видео',
			title_desc: 'Максимальна длина названия видео 50 символов!',
			description: 'Максимальная длина описания видео 150 символов!',
			check_title: 'Проверьте длину заголовка в видео #{0}, он должен быть не больше, чем 50 символов',
			check_description: 'Проверьте длину описания в видео #{0}, оно должно быть не больше, чем 150 символов',
			add: 'Добавить видео',
			can_remove: 'В текущем дизайне лэндинга вы можете оставить <b>одно</b> или <b>два</b> видео на странице, либо <b>убрать блок</b> с видеозаписями совсем.',
			to_add: 'Чтобы добавить новое видео, просто нажмите <b>"+"</b> в верхнем правом углу',
			1: {
				title: 'Коротко о РОЙ Клубе',
				description: 'РОЙ Клуб – объединяет людей с целью обеспечить достойную жизнь себе, своим детям, а также помочь другим, изменить весь мир в лучшую сторону.'
			},
			2: {
				title: 'Владислав Рябенко — звездный лидер РОЙ Клуба.',
				description: 'Это человек, который добивается успеха несмотря ни на что. И благодаря РОЙ Клубу он смог изменить свою жизнь к лучшему!'
			}
		},
		password: {
			title: 'Сменить пароль',
			current: 'Текущий пароль',
			new: 'Новый пароль',
			not_match: 'Пароли не совпдают!',
			repeat: 'Повторите пароль',
			validation: 'Должен содержать хотя бы одну латинскую букву в нижнем регистре, одну в верхнем регистре и содержать более 6 символов.',
			incorrect: 'Старый пароль введён неверно!'
		}
	},

	// Promo
	promo: {
		title: 'Какую криптовалюту вы используете?',
		choose: {
			crypto: 'Выберите криптовалюту',
			mode: 'Выберите режим'
		},
		what_use: 'Что будете использовать на вашем лендинге?',
		form: 'Форма сбора контактных данных - подходит для <b>"холодной" аудитории</b>, которая еще не знает о Рой Клубе и им нужно объяснить почему и куда вы их приглашаете.',
		bot: 'Помощник в мессенджерах - подходит для <b>"теплой" аудитории</b>, которая понимает что она делает и зачем.',
		opts: {
			form: 'Форма сбора данных',
			bot: 'Помощник регистрации'
		},
		link: {
			form: 'В таком режиме ссылка на лэндинг с приглашением в чат-боты будет выглядеть так:',
			bot: 'В таком режиме ссылка на лэндинг с формой будет выглядеть так:',
			form_default: 'по обычным ссылкам останется лэндинг с формой сбора контактных данных.',
			bot_default: 'по обычным ссылкам останется лэндинг с чат-ботами в мессенджерах.'
		},
		label: {
			form: 'Форма',
			bot: 'Бот',
			your_links: 'Ваши ссылки для привлечения рефералов',
			tg_link: 'Ссылки такого вида автоматически открют телеграм клиент пользователя',
			by_id: 'По ID',
			landing: 'Лэндинг',
			land_desc: 'Ваша персональная страничка для привлечения рефералов, которую можно использовать на любых рекламных площадках',
			landing_en: 'Лэндинг (En)',
			landing_desc: 'Для англоязычного лэндинга просто добавьте в URL пометку о языке',
			diff_crypto: 'Ваши ссылки для отображения разных криптовалют на лендинге',
			which_show: 'При переходе по обычной ссылке, будет открываться лендинг с той криптовалютой, которую вы выбрали выше',
			all: 'Все',
			all_crypto: 'В таком режиме будут показаны обе криптовалюты, однако рефералы будут привлекаться в выбранную выше систему'
		}
	},
	
	// Funnel
	funnel: {
		noti: 'Вы можете перетаскивать карточки ваших рефералов на нужный этап.<br>Например, если человек регистрируется не через бот, а при вашем личном контроле.',
		steps: {
			added: 'Добавлен',
			contacts: 'Контакты',
			sigen_wal: 'SIGEN кошелек',
			roy_wal: 'ROY кошелек',
			coins: 'Покупка монет',
			in_club: 'В клубе'
		},
		contact: {
			address: 'Адрес',
			key: 'Пуб. Ключ',
			pzm_address: 'PRIZM Адрес',
			pzm_key: 'PRIZM Пуб. ключ',
			umi_address: 'UMI Адрес',
		}
	},

	// Form
	form: {
		modal: {
			confirm: 'Подтвердите действие',
			you_want: 'Вы хотите удалить <b>{0}</b>',
			cannot: 'Действие нельзя будет отменить.'
		},
		date: 'Дата',
		name: 'Имя',
		phone: 'Телефон',
		email: 'Почта',
		system: 'Система',
		comment: 'Комментарий',
		to_funnel: 'Переместить в воронку',
		no_new: 'На данный момент у вас нет новых заявок...'
	},
	
	// New
	new: {
		added: '"{0}" добавлен в список контактов',
		noti: {
			manually: 'Вы можете создать контакт вручную. Это поможет вам держать общую базу своих рефералов в одном месте.',
			maybe: 'Возможно, в следующих обновлениях мы добавим интерфейс для пакетного взаимодействия со своей картотекой рефералов.'
		},
		card: {
			title: 'Карточка контакта',
			name: 'Имя контакта',
			name_place: 'Иван Иванов',
			comment: 'Комментарий',
			comment_place: 'Произвольный комментарий, который видите только вы',
			sigen: {
				title: 'Данные SIGEN',
				address: 'Адрес PRIZM',
				key: 'Публичный ключ PRIZM',
				u_address: 'Адрес UMI'
			},
			roy: {
				title: 'Данные инвестирования ROY',
				address: 'Адрес в РОЙ Клубе',
				key: 'Публичный ключ в РОЙ Клубе',
				u_address: 'Адрес UMI'
			}
		},
		data: {
			title: 'Контактные данные',
			phone: 'Телефон',
			phone_place: 'Номер телефона',
			social: {
				title: 'Социальные сети',
				telegram: 'Telegram профиль',
				instagram: 'Instagram профиль',
				vk: 'Профиль Вконтакте',
				whatsapp: 'Номер WhatsApp',
				viber: 'Номер Viber'
			},
			geo: {
				title: 'Геоданные',
				country: 'Страна',
				region: 'Регион проживания',
				lang: 'Язык'
			}
		}
	},

	// Tree
	tree: {
		noti: {
			in_dev: 'Функционал страницы находится в разработке, если у вас есть идеи и предложения, как вам было бы удобнее пользоваться этим инструментом, то напишите их в <a target="_blank" href="tg://resolve=roysupport">техподдержку</a>',
			yours: 'Это ваша структура в клубе. Мы проверяем адреса кошельков и реферальные ID по нашей с вами общей картотеке помощника. Таким образом мы помогаем вам держать связь со своими рефералами до самого последнего уровня.',
			guide: 'Используя иконки справа можно копировать нужные контакты в свою воронку для дальнейшего заполнения.<br>Чем качественней вы и ваши рефералы будете заполнять профили контактов, тем больше информации будет собрано о вашей структуре.',
			depth: 'Чем больше глубина структуры, тем дольше ожидание сбора свежих данных, для золотого уровня ожидание может затянутся на 10-15 минут, а то и больше!',
			confirm: 'Для того, чтобы получить доступ к этому разделу нужно подтвердить свой аккаунт!<br>Вернитесь в настройки, заполните поля реф-номер, SIGEN-адрес и подпишите предложенное сервисом сообщение. Эта процедура единоразовая и не займет много времени.'
		},
		balance: 'Баланс',
		contacts: 'Контакты',
		ref_id: 'Реф. ID',
		on_level: 'На уровень 1',
		rang: 'Ранг',
		depth: 'Глубина',
		name: 'Кошелёк, имя или username',
		refresh: 'Обновить структуру',
		table: {
			already: 'У вас уже есть этот контакт в базе!',
			move: 'Переместить в воронку',
			dublicate: 'Создать дубликат в своей базе'
		}
	}
}