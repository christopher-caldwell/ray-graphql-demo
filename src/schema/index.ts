import './actor'
import './address'
import './category'
import './city'
import './country'
import './customer'
import './film'
import './inventory'
import './language'
import './payment'
import './rental'
import './staff'
import './store'

import { builder } from './builder'

export const schema = builder.toSchema()
