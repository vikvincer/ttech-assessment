import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderNavbarComponent } from './components/header-navbar/header-navbar.component';
import { ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from '../material.module';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { CardItemComponent } from './components/card-item/card-item.component';
import { ListComponent } from './components/list/list.component';
import { SharedModule } from './modules/shared.module';
import { FooterComponent } from './components/footer/footer.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderNavbarComponent,
    ListComponent,
    FooterComponent,
    ContactFormComponent,
    // PageHeaderComponent
    // CardItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    // SharedModule
  ],
  providers: [
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
