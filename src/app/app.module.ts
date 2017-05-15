import { MenuService } from './services/menu.service';
import { CanActivateViaEntitySelectionGuard } from './common/guards/can-activate-via-entity-selection.guard';
import { RecordsModule } from './modules/records/records.module';
import { CoreComponentsModule } from './core/components/core-components.module';
import { Provider } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { AuthConfig, AuthHttp } from './common/services/AuthHttp';
import { CallbackComponent } from './modules/shell/callback.component';
import { WelcomeComponent } from './modules/shell/welcome.component';
import { AuthGuard } from './common/guards/auth.guard';
import { AuthService } from './common/services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule,} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { Router, RouterModule } from '@angular/Router';

import { routing, routedComponents } from './app.routing';

// LAYOUT COMPONENTS
import { HeaderComponent } from './shared/header/header.component';
import { MenuComponent } from './shared/sidebar/menu.component';
import { SideBarComponent } from './shared/sidebar/sidebar.component';
// import { ExampleComponent } from './modules/example/example.component';
import { EntitySelectionComponent } from './modules/records/legal-entity/entity-selection.component';

import { ServiceErrorHandlingService } from './services/service-error-handling.service';
import { SessionService } from './services/session.service';
import { HttpService } from './common/services/http.service';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
    return new AuthHttp(new AuthConfig({ noTokenError: true }), <any>http, <any>options);
}
export const AUTH_PROVIDERS: Provider = {
    provide: AuthHttp,
    deps: [Http, RequestOptions],
    useFactory: authHttpServiceFactory,
};

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
     ReactiveFormsModule,
    CoreComponentsModule,
    RecordsModule
    
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    SideBarComponent, WelcomeComponent, CallbackComponent
    
  ],  
  providers: [ AUTH_PROVIDERS,
    HttpService, AuthService, SessionService, 
    ServiceErrorHandlingService, 
    AuthGuard, 
    CanActivateViaEntitySelectionGuard,
    MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
