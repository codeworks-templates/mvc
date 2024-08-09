import { router } from './router-config.js';
import { HomeController } from './controllers/HomeController.js';

class App {  

  HomeController = new HomeController()

  constructor() {
    if(USE_ROUTER){
       this.router = router 
    }
  }

}

const app = new App()
app.init()
// @ts-ignore
window.app = app
