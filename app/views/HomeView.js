export class HomeView {
  static get HomeTemplate() {
    return /*html*/`
    <div class="container-fluid">
  
      <div class="row my-3">
        <div class="col-lg-5">
          <div class="card p-2">
            <div class="card-title p-2">
              <div class="d-flex align-items-center">
                This is the Home Page
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <div class="row" id="values"></div>
    
    </div>
      `
  }
}