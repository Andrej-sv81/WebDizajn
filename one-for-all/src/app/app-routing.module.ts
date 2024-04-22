import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrganizerComponent } from './organizer/organizer.component';
import { FestivalComponent } from './festival/festival.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { AdminOrganizerComponent } from './admin-organizer/admin-organizer.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { ErrorComponent } from './error/error.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'organizer/:orgId', component: OrganizerComponent},
  {path: 'festival/:festId', component: FestivalComponent},
  {path: 'admin', component: AdminNavComponent},
  {path: 'admin-org', component: AdminOrganizerComponent},
  {path: 'admin-user', component: AdminUserComponent},
  {path: 'error', component: ErrorComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
