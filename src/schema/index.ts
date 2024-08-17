import './actor'
import './category'
import './film'
import './staff'

import { builder } from './builder'

export const schema = builder.toSchema()
