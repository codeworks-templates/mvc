import { router } from './router-config.js';
import { HomeController } from './controllers/HomeController.js';
const USE_ROUTER = false

class App {  

  HomeController = new HomeController()

  constructor() {
    if(USE_ROUTER){
       this.router = router 
    }
  }

}

const app = new App()
// @ts-ignore
window.app = app
