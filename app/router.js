import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { HomeView } from "./views/HomeView.js";

export const router = [
  {
    path: '',
    controller: [HomeController, ValuesController],
    view: HomeView
  },
  {
    path: '#/about',
    controller: AboutController,
    view: /*html*/`
      <div class="card">
        <div class="card-body">
          <p>About Page</p>
          <button class="btn btn-dark" onclick="app.AboutController.testButton()">😎</button>
        </div>
      </div>
    `
  }
]