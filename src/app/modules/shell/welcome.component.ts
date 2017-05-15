import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'welcome',
    template: `
    <div class="row" style="color: #cececf">
     <div class="col-lg-12 text-xs-center">
        <i  class="icon aasi-logo " style="font-size: 24em;"></i>
     </div>
     </div>
      `,
})
export class WelcomeComponent  { 
    constructor() {
    }
}