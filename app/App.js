import { ExampleController } from './controllers/ExampleController.js';
import { AuthController } from './Auth/AuthController.js'

class App {

  ExampleController = new ExampleController() // ☑️ you can remove this - example only

}

// @ts-ignore
window.app = new App()


