import './actor'
import './category'
import './film'

import { builder } from './builder'

export const schema = builder.toSchema()
