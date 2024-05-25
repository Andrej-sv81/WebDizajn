import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { OrganizerComponent } from './organizer/organizer.component';
import { FestivalComponent } from './festival/festival.component';
import { AdminOrganizerComponent } from './admin-organizer/admin-organizer.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { ErrorComponent } from './error/error.component';
import { RegisterComponent } from './register/register.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    OrganizerComponent,
    FestivalComponent,
    AdminOrganizerComponent,
    AdminUserComponent,
    AdminNavComponent,
    ErrorComponent,
    RegisterComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
