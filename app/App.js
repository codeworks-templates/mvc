import { ExampleController } from './controllers/ExampleController.js';
import { Router } from './utils/Router.js'

class App {

  ExampleController = new ExampleController() // ☑️ you can remove this - example only

}

// @ts-ignore
window.app = new App()


