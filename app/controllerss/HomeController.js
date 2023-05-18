import { setHTML } from '../utilss/Writer.js'
import { HomeView } from '../views/HomeView.js'

// Private
function _drawHome() {
  setHTML('app', HomeView.HomeTemplate)
}


// Public
export class HomeController {
  constructor() {
    _drawHome()
  }

}
