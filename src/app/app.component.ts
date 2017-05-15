import { AuthService } from './common/services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private authService: AuthService)
  {

  }

  checkUser()
  {
     return new Promise((success, failure) => {
            this.authService.isLoggedIn().then(logged => {
                if (logged) {
                    success(true);
                } else {
                    //this.authService.setPreviousPageUrl(state.url);
                    this.authService.startSignIn();
                    //this.router.navigate(['/login']);
                    success(false);
                }
            }).catch(err => failure(err));
        });
  }
  title = 'app works!';
}
