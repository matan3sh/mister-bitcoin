import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactPreviewComponent } from './components/contact-preview/contact-preview.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactEditComponent } from './pages/contact-edit/contact-edit.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ContactPageComponent, ContactListComponent, ContactPreviewComponent, ContactDetailsComponent, NavbarComponent, ContactEditComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
