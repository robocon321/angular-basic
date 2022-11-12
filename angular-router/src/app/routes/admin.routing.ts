import { AuthGuard } from './AuthGuard';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from '../components/admin/admin.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] }
];

export const AdminRoutes = RouterModule.forChild(routes);
