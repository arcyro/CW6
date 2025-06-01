import {Component} from '@angular/core';
import {NgForOf} from '@angular/common';
import {ApiService} from '../api.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-book-list',
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.css'
})
export class BookListComponent {
  books: any[] = [];

  constructor(private apiService: ApiService) {
  }
  ngOnInit() {
    this.apiService.getBooks().subscribe((data: any[]) => {
      this.books = data;
    });
  }

}
