import { router } from './router-config.js';

class App {

  router = router

}


const app = new App()
// @ts-ignore
window.app = app
