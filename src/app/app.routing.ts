import {
  CallbackComponent
} from './modules/shell/callback.component';
import {
  WelcomeComponent
} from './modules/shell/welcome.component';
import {
  AuthGuard
} from './common/guards/auth.guard';
import {
  Routes,
  RouterModule,
  RouterStateSnapshot
} from '@angular/router';

//-- COMPONENT ROUTES
import {
  EntitySelectionComponent
} from './modules/records/legal-entity/entity-selection.component';


const appRoutes: Routes = [{
    path: 'entity-selection',
    component: EntitySelectionComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'welcome',
    component: WelcomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'callback',
    component: CallbackComponent,
  },
  { path: 'records', loadChildren: 'app/modules/records/records.module#RecordsModule' },
  {
    path: '',
    component: EntitySelectionComponent,
    canActivate: [AuthGuard]
  },
];

export const routing = RouterModule.forRoot(appRoutes);

export const routedComponents = [];
