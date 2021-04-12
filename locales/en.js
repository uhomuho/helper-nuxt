export default {

	// Other
	save: 'Save',
	copied: '"{0}" copied',
	default: 'Default',
	cancel: 'Cancel',
	delete: 'Delete',

	// Authorization / Registration
	log_out: 'Log out',
	log_in: 'Log In',
	sign_up: 'Sign Up',
	login: 'Login',
	login_placeholder: 'Your nickname or last name',
	login_validation: 'Must contain only Latin letters, numbers, signs "_" and "-" are allowed, must not contain "umi" or "pzm", maximum 32 letter',
	login_invalid: 'This username does not exist or is entered incorrectly',
	password: 'Password',
	password_placeholder: "Enter password",
	password_validation: "Your password must contain at least 6 characters, including at least one lowercase and one uppercase Latin letter.",
	password_invalid: 'Invalid password',
	telegram_validation: 'Enter your Telegram nickname as “Username”',
	fillAll: 'Fill in all the fields!',
	welcome_leader: 'Welcome, {0}!',
	welcome_back_leader: 'Welcome back, {0}!',
	leader_exists: 'User with current username already exist',
	wrong_data: 'The number or password was entered incorrectly, check the correctness of the data!',

	account_saved: 'Changes saved!',

	// Header
	searchContacts: 'Search for contacts...',
	tomain: 'To the main',
	
	// Notifications
	noti: {
		gotit: 'Got it',
		noti_bot: 'To receive notifications, go to <a target="_blank" href="https://t.me/roy_helper_notify_bot?start={0}">@roy_helper_notify_bot</a> and click Start'
	},

	// Title bar
	title: {
		dashboard: 'Control dashboard',
		profile: 'Account',
		promo: 'Promo materials',
		funnel: 'Referral funnel',
		form: 'Form contacts',
		"contact-new": 'Create contact',
		"contact-id": 'Edit contact {0}',
		tree: 'Structure'
	},

	// Aside
	aside: {
		roysupport: '<b>ROY</b> Support',
		main: 'Main',
		dashboard: 'Dashboard',
		profile: 'Settings',
		promo: 'Landing page',
		referrals: 'Referrals',
		funnel: 'Funnel',
		form: 'Form contacts',
		add: 'Add referral',
		tree: 'Structure',
		info: 'Info',
		wallet: 'Walelt',
		blockchain: 'Blockchain',
		tech_support: 'Help'
	},

	// Dashboard
	chart: {
		events: 'Events of the week',
		added: 'Added',
		new: 'New contacts',
		SIGEN: 'SIGEN wallets',
		ROY: 'ROY wallets',
		PRIZM: 'Buying PRIZM',
		club: 'Joined the Club',
		date: 'Date',
		add: 'Add.',
		cont: 'Cont.',
		purchase: 'Purchase',
		club: 'Club',
		amount: 'Amount'
	},
	dash: {
		invited: 'Invited',
		in_club: 'In the Club',
		koi_tooltip: 'Percentage of referrals who have completed Club registration funnel.'
	},

	// Profile
	profile: {
		verify: 'Enter your UMI or PRIZM ref number within the Club. It\'s required to start inviting people using the ROY Support System',
		socials: {
			required: 'Fields Name, Phone number and Telegram login is required!',
			title: 'Data for referrals',
			desc1: 'These contacts will be available for your referrals before the registration and in case of issues with the registration process.',
			desc2: 'This data will also be displayed on your personal landing page!',
			name: 'Your name',
			name_validation: 'There must be at least one letter! Digits, letters, and spaces are allowed!',
			phone: 'Phone Number',
			phone_validation: 'Digits, characters ("+"), and brackets are allowed!',
			telegram: 'Telegram User ID',
			telegram_validation: 'Latin letters, digits, and characters (\"-\", \"_\") are allowed! Enter your username without the \"@\" character',
			instagram: 'Instagram username',
			other_validation: 'Latin letters, digits, and characters ("-", "_") are allowed!',
			vk: 'Vkontakte Profile',
			whatsapp: 'WhatsApp Number',
			viber: 'Viber Number',
			not_all: 'Not all fields are filled in as required!'
		},
		settings: {
			title: 'Your profile',
			not_verified: 'Not verified!',
			verified: 'Verified',
			message: 'Message:',
			signature: 'Signature',
			success: 'Your acount successfully verified!',
			error: 'Wrong signature',
			desc: 'It`s the digits at the end of your referral link in your roy.club account (12345)',
			y_metric: 'Landing page metrics',
			y_placeholder: 'You can also indicate your Yandex Metrics code in place of this code to track landing page visits in more detail.',
			design_title: 'Landing page design',
			design_desc: 'These setting are currently locked as we\'re in the process of testing and developing landing page types to set up depending on the audience.',
			design: 'Select landing page',
			designs: {
				1: 'Standart',
				2: 'Universal'
			},
			umi: {
				ref: 'UMI ref. number',
				wallet: 'Your UMI wallet',
				verify: 'Verify UMI Wallet'
			},
			pzm: {
				ref: 'PRIZM ref. number',
				wallet: 'Your PRIZM wallet',
				verify: 'Verify PRIZM Wallet'
			},
		},
		videos: {
			video: 'Video #{0}',
			url: 'YouTube video URL or ID',
			title: 'Short video name',
			description: 'Video description',
			title_valid: 'Max length of video title is 50 characters!',
			description_valid: 'Max length of video description is 150 characters!',
			check_title: 'Check length of title in video #{0}, it should be no more than 50 characters',
			add: 'Add video',
			check_description: 'Check length of description in video #{0}, it should be no more than 150 characters',
			can_remove: 'In this landing page design, you can leave <b>one</b> or <b>two</b> videos on the page or <b>hide the video section</b>.',
			to_add: 'To add a new video, just click <b>\“+\”</b> in the top right corner',
			1: {
				title: 'Fast facts about the ROY Club',
				description: 'The ROY Club is a social-oriented project that unites people who want to secure a worthwhile life for themselves and their children and help other people to change the whole world for the better.'
			},
			2: {
				title: 'Vladislav Ryabenko is a star leader of the ROY Club.',
				description: 'This is a person who achieves success no matter the odds. Thanks to the ROY Club, he has changed his life for the better!'
			}
		},
		password: {
			title: 'Reset password',
			current: 'Current password',
			new: 'New password',
			not_match: 'Passwords don\'t match!',
			repeat: 'Re-enter password',
			validation: 'Your password must contain at least 6 characters, including at least one lowercase and one uppercase Latin letter.',
			incorrect: 'The old password was entered incorrectly!'
		}
	},

	// Promo
	promo: {
		title: 'Which cryptocurrency are you using?',
		choose: {
			crypto: 'Choose cryptocurrency',
			mode: 'Choose mode'
		},
		what_use: 'What will you use on your landing page?',
		form: 'The contact form - suitable for a <b>\"cold\" audience</b> who do not yet know about Roy Club and they need to explain why and where you invite them.',
		bot: 'Assistant in messengers - suitable for <b>\"warm\" audience</b>, who understands what she is doing and why.',
		opts: {
			form: 'The contact form',
			bot: 'Assistant in messengers'
		},
		link: {
			form: 'In this mode, the link to the landing page with the form will look like this:',
			bot: 'In this mode, the link to the landing page with an invitation to chat bots will look like this:',
			form_default: 'the usual links will remain the landing page with the contact data collection form.',
			bot_default: 'the usual links will remain the landing page with chat bots in instant messengers.'
		},
		label: {
			form: 'Form',
			bot: 'Bot',
			your_links: 'Your links for inviting referrals',
			tg_link: 'Links of this type will auto-open user\'s Telegram client',
			by_id: 'By ID',
			landing: 'Landing',
			land_desc: 'Your personal web-page to invite referrals that can be used in any advertising media',
			landing_en: 'Landing (En)',
			landing_desc: 'For an English-language landing page, just add a language mark to URL',
			diff_crypto: 'Your links to display different cryptocurrencies on the landing page',
			which_show: 'When you click on a regular link, a landing page with the cryptocurrency you selected above will open',
			all: 'All',
			all_crypto: 'In this mode, both cryptocurrencies will be shown, however, referrals will be attracted to the system selected above.'
		}
	},
	
	// Funnel
	funnel: {
		noti: 'You can drag and drop your referrals\' cards to the right steps.<br>For instance, if a referral registers under your personal guidance rather than through a bot.',
		steps: {
			added: 'Added',
			contacts: 'Contacts',
			sigen_wal: 'SIGEN wallet',
			roy_wal: 'ROY wallet',
			coins: 'Purchase coins',
			in_club: 'In the Club'
		},
		contact: {
			address: 'Address',
			key: 'Key',
			pzm_address: 'PRIZM Address',
			pzm_key: 'PRIZM Key',
			umi_address: 'UMI Address',
		}
	},

	// Form
	form: {
		modal: {
			confirm: 'Confirm action',
			you_want: 'Do you want to delete <b>{0}</b>',
			cannot: 'The action cannot be undone.'
		},
		date: 'Date',
		name: 'Name',
		phone: 'Phone',
		email: 'Email',
		system: 'System',
		comment: 'Comment',
		to_funnel: 'Move to funnel',
		no_new: 'At the moment you have no new applications...'
	},

	// New
	new: {
		added: '"{0}" added to contacts list',
		noti: {
			manually: 'You can create contact manually. It helps you store a database of your referrals in a single location.',
			maybe: 'In subsequent upgrades, we might add an interface for batch interaction with a database of referrals.'
		},
		card: {
			title: 'Contact card',
			name: 'Contact name',
			name_place: 'John Doe',
			comment: 'Comment',
			comment_place: 'Random comment displayed to you only',
			sigen: {
				title: 'SIGEN details',
				address: 'PRIZM address',
				key: 'PRIZM public key',
				u_address: 'UMI address'
			},
			roy: {
				title: 'ROY investment details',
				address: 'ROY address',
				key: 'ROY public key',
				u_address: 'UMI address'
			}
		},
		data: {
			title: 'Contact details',
			phone: 'Phone',
			phone_place: 'Phone Number',
			social: {
				title: 'Social networks',
				telegram: 'Telegram user ID',
				instagram: 'Instagram username',
				vk: 'Vkontakte Profile',
				whatsapp: 'WhatsApp Number',
				viber: 'Viber Number'
			},
			geo: {
				title: 'Geodata',
				country: 'Country',
				region: 'Region',
				lang: 'Language'
			}
		}
	},

	// Tree
	tree: {
		noti: {
			in_dev: 'The functionality of the page is under development, if you have ideas and suggestions, as it would be more convenient for you to use this tool, then write them to <a target="_blank" href="tg://resolve=roysupport">tech support</a>',
			yours: 'This is your structure in the club. We check wallet addresses and referral IDs with our shared assistant file cabinet. In this way, we help you keep in touch with your referrals to the very last level.',
			guide: 'Using the icons on the right, you can copy the necessary contacts to your funnel for further filling.<br>The better you and your referrals fill out contact profiles, the more information will be collected about your structure.',
			depth: 'The greater the depth of the structure, the longer the wait for the collection of fresh data, for the gold level, the wait can drag on for 10-15 minutes, or even more!',
			confirm: 'In order to access this section you need to confirm your account!<br>Return to the settings, fill in the ref-number, SIGEN-address fields and sign the message proposed by the service. This procedure is one-time and does not take much time.'
		},
		balance: 'Balance',
		contacts: 'Contacts',
		ref_id: 'Ref. ID',
		on_level: 'On level 1',
		rang: 'Rang',
		depth: 'Depth',
		name: 'Wallet, name or username',
		refresh: 'Refresh',
		table: {
			already: 'You already have this contact!',
			move: 'Move to funnel',
			dublicate: 'Create dublicate'
		}
	}
}