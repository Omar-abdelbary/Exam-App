import { Routes } from '@angular/router';
import { AuthComponent } from './features/auth/auth.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { LoginComponent } from './features/auth/login/login.component';
import { ForgetpassComponent } from './features/auth/forgetpass/forgetpass.component';
import { ChangepassComponent } from './features/auth/changepass/changepass.component';

export const routes: Routes = [
  // auth routes
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: '',
        redirectTo: 'register',
        pathMatch: 'full',
        title: 'register',
      },
      { path: 'register', component: RegisterComponent, title: 'register' },
      { path: 'login', component: LoginComponent, title: 'login' },
      {
        path: 'forgetpass',
        component: ForgetpassComponent,
        title: 'forgetPass',
      },
      {
        path: 'changepass',
        component: ChangepassComponent,
        title: 'Change Password',
      },
    ],
  },
];
