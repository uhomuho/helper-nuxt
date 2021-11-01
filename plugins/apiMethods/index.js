import Leaders from './leaders'
import Contacts from './contacts'
import Bots from './bots'

export default (context, inject) => {
	Leaders(context, inject)
	Contacts(context, inject)
	Bots(context, inject)
}