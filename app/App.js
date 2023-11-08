import { AppState } from './AppState.js';
import { router } from './router-config.js';

class App {

  router = router
  AppState = AppState

}


const app = new App()
// @ts-ignore
window.app = app
