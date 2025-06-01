import { Routes } from '@angular/router';
import {BookAddComponent} from './book-add/book-add.component';

export const routes: Routes = [
  {
    path:'',
    redirectTo:'books',
    pathMatch:'full'
  },
  {
    path:'book/add',
    component:BookAddComponent,
  }
];
