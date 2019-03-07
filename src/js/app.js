'use strict'

import * as routeHandler from './modules/routeHandler.js'
import './modules/routie.js'

routie({
  // Homepage
  '': routeHandler.home,
  // Subject page
  ':name': routeHandler.subject,
  // Book page
  'book/:name': routeHandler.book
})