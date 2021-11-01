export default async () => {
	return await Promise.resolve({

		// Homepage
		home: {
			logo: 'ROY ASSISTANT',
			menu: {
				capabilities: 'Opportunities',
				start: 'Quick Start',
				about: 'About ROY Club'
			},
			roy: 'ROY Club',
			btn_start: 'Get started',
			btn_more: 'Learn more',
			s1: {
				title: 'Cutting-edge MLM technologies',
				subtitle: 'Receive referrals automatically. ROY Assistant is working – while you\'re resting!',
				free: 'Free',
				simple: 'Simple',
				easy: 'Clear',
				effective: 'Efficient'
			},
			s2: {
				title: 'ROY Assistant features',
				automatic: 'Automatic referrals registration',
				personal: 'Personal ROY Club landing page',
				chat_bot: 'Chat bot sending notifications about all events',
				comfort: 'Intuitive user interface to control your referrals',
				statistics: 'Detailed registration statistics',
				connect: 'Contacting referrals for any questions',
				contact: 'Receiving contact details',
				control: 'Personal control over registrations at all stages',
			},
			s3: {
				title: 'Quick start with ROY Assistant',
				register: 'Sign up',
				landing: 'Landing page setting',
				funnel: 'Sales pipeline management',
				step: 'Step <b>{0}</b>',
				steps: {
					1: 'Register',
					2: 'Enter you data in the Settings',
					3: 'Make sure to specify your ROY Club referral number',
					4: 'Activate chat-bots',
					5: 'Verify your wallet',
					6: 'Send the ROY Assistant link to referrals',
					7: 'Rest while the ROY Assistant is registering new partners for you.'
				}
			},
			s4: {
				title: 'What is the ROY Club?',
				text: {
					1: 'ROY Assistant is a project designed by the ROY Club, an investment community which earns on cryptocurrency. The ROY Club members generate profit of up to 15% per month. They can withdraw their coins at any time, with no limitations imposed.',
					2: 'ROY Club\'s mission is making the world a better place! Our community is neither a company nor business; it\'s a group of like-minded people who united to earn together. We use spare funds to sponsor social, charitable, and other useful projects.'
				},
				follow: 'Follow us!'
			},
			s5: {
				title: 'Other projects by the ROY Club',
				blago: 'Roy blago',
				movement: 'ROY MOVEMENT',
				market: 'ROY MARKET'
			}
		},

		// Other
		save: 'Save',
		copied: '"{0}" copied',
		default: 'Default',
		cancel: 'Cancel',
		delete: 'Delete',
		contact_added: 'Contact added',
		err: 'Something went wrong',
		noimage: 'No image',
		answers: 'Contact\'s answers',
		get_more: "More details",
		disable_pzm: '{0}, from today in ROY Assistant the ability to attract referrals to the PRIZM system will be disabled.',
	
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
		forgot_pwd: 'Forgot your password?',
	
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
			tree: 'Structure',
			bots: 'My bots',
			"bots-id": 'Bot "{0}"',
			"bots-id-funnel": 'Funnel of "{0}" bot'
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
			tech_support: 'Help',
			bots: 'My bots'
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
			},
			not_all: 'Not all fields are filled in as required!',
			spaces: 'The name cannot consist only of spaces',
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
					1: 'First',
					2: 'Second',
					3: 'Third'
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
		},
	
		// Bots
		bots: {
			create: 'Create bot',
			exist: 'Bot with this name already created!',
			table: {
				name: 'Bot\'s name',
				empty: 'It looks like you haven\'t created any bot yet',
				delete: 'Delete bot'
			}
		},

		// Bot
		bot: {
			noti: {
				link: 'Bot\'s link:',
				id: 'Bot\'s ID:'
			},
			tree: {
				drag: "Drag a scene here from the list",
				compare: "Compare with...",
				clear: "Clear",
				message_hint: 'Action after <b>\'{0}\'</b> message of <b>\'{1}\'</b> scene',
				button_hint: 'Action after <b>\'{0}\'</b> button of <b>\'{1}\'</b> scene'
			},
			scene: {
				drop: 'Drop your files here or click to upload',
				name: 'Scene name',
				already: 'This bot already has such a scene',
				fill_name: 'Fill the name field before save!',
				name_valid: 'The scene name must not contain the * symbol and be longer than 38 characters and containst only latin letters',
				message: 'Scene message',
				fill_message: 'Fill the message field before save!',
				message_place: 'You can add some html in your text to create more pretty message\nFull list of tags you can see by hover on clippy icon in right top',
				clear: 'Clear',
				example: 'Example',
				example_text: 'Example with <b>bold text</b> and <br><a href="https://roy.support">link on another line</a>',
				output: 'Output:',
				action: 'Scene action',
				choose: 'Choose scene action',
				choose_type: 'Choose the type of message or change the action on stage!',
				mes_type: 'Message type',
				button: 'Button {0}',
				fill_buttons: 'Fill all buttons fields or remove emty!',
				button_valid: 'Button text must not exceed 10 characters!',
				button_text: 'Text of the button',
				load_err: 'Inappropriate format, poor quality, or too large (3MB limit per image)!',
				restore_image: 'Restore image',
				actions: {
					message: 'Message',
					buttons: 'Buttons',
					without: 'Without action'
				},
				messages_types: {
					phone: 'Phone number',
					umi_ad: 'UMI Address',
					pzm_ad: 'PZM Address',
					number: 'Number',
					text: 'Text'
				}
			}
		},
		agreement: {
			button: "User Agreement",
			by_accepting: "By accepting this Agreement and leaving your data on the Site <a href='https://roy.support'>roy.support</a>, (hereinafter, the Site), by filling in the fields of the online application form",
			user: "User:",
			confirms: "confirms that all the data specified by him are personally owned by him,",
			acknowledges: "acknowledges and confirms that he has carefully and fully familiarized himself with this Agreement and the conditions contained therein for the processing of his personal data indicated to him in the fields of the online application (registration) on the Site",
			agrees: "agrees to the processing by the Site of the personal data provided within the information for the purpose of concluding the present Agreement between him and the Site, as well as its subsequent execution;",
			conditions: "agrees with the conditions for the processing of personal data without reservations and limitations.",
			consent: "The User gives his consent to the processing of his personal data, namely, the commission of actions provided for by Clause 3 Part 1 of Art. 3 of the Federal Law of July 27, 2006 N 152-FZ \"On Personal Data\", and confirms that by giving such consent, he acts freely, his will and in his interest.",
			processing: "The User's consent to the processing of personal data is specific, informed and conscious.",
			recognized: "The User's consent is recognized fulfilled in simple written form, for the processing of the following personal data: surname, first name, patronymic;  year of birth; place of stay (city, region); phone number; e-mail address (E-mail).",
			services: "The User provides services <a href='https://roy.support'>roy.support</a>  the right to perform the following actions (transactions) with personal data: collection and accumulation; storage during the period of storage of the accounts, established by regulatory documents, but not less than three years, from the date of the termination of the use of the services by the User; update (update, change); using; destruction; depersonalization; transfer on demand of the court, including, to third parties, with observance of measures ensuring the protection of personal data from unauthorized access.",
			valid: "This consent is valid for an unlimited period of time from the date of submission of the data and can be withdrawn by you by submitting an application to the Site administration indicating the data specified in Art. 14 of the Law \"On Personal Data\".",
			responsible: "The Site is not responsible for the use (both legal and illegal) by third parties of the information placed by the User on the Site, including its reproduction and distribution, carried out in all possible ways.",
			right: "The Site has the right to make changes to this Agreement. When making changes to the current version, the date of the last update is indicated. The new version of the Agreement comes into force from the moment of its placement, unless otherwise provided by the new edition of the Agreement",
			substantive: "The substantive and procedural law of the Russian Federation is subject to application to this Agreement and the relationship between the User and the Site arising in connection with the application of the Agreement."
		}
	})
}