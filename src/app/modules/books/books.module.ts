import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { SharedModule } from '../shared.module';
import { BookPageComponent } from './pages/book-page/book-page.component';
import { ApiService } from 'src/app/services/api/books/services';
import { BooksLocalService } from './services/books-local.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BookPageComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    HttpClientModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [ApiService, BooksLocalService]
})
export class BooksModule { }
