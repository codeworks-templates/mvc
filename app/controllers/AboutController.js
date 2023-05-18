import { Pop } from "../utils/Pop.js"

// Public
export class AboutController {
  constructor() {
    console.log('The About Page has loaded')
  }

  testButton(){
    Pop.success('The button Works 😎')
  }

}
