import { ExampleController } from './controllers/ExampleController.js';

class App {

  ExampleController = new ExampleController() // ☑️ you can remove this - example only

}

window['app'] = new App()


