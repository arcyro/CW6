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

  deleteBook(id: number) {
    const confirmed = window.confirm(`Are you sure you want to delete ?`);
    if (confirmed) {
      this.apiService.deleteBook(id).subscribe({
        next: (res) => {
          this.books = this.books.filter(book => book.id !== id);
        }
      });

    }
  }
}
