import {Component} from '@angular/core';
import {NgIf} from '@angular/common';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ApiService} from '../api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book-add',
  imports: [
    NgIf,
    ReactiveFormsModule
  ],
  templateUrl: './book-add.component.html',
  styleUrl: './book-add.component.css'
})
export class BookAddComponent {
  bookForm!: FormGroup;
  submitted: boolean = false;

  constructor(private apiService: ApiService, private fb: FormBuilder, private router: Router) {
    this.bookForm = this.fb.group({
      title: new FormControl('', [Validators.required, Validators.minLength(2)]),
      author: new FormControl('', [Validators.required, Validators.minLength(2)]),
      description: new FormControl('', [Validators.required]),

    });
  }

  get f() {
    return this.bookForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.bookForm.valid) {
      console.log(this.bookForm.value);
      console.log("Form is valid");
      this.apiService.addBook(this.bookForm.value).subscribe({
        next: (res: any) => {
          this.router.navigateByUrl('/books');
        }
      });
    } else {
      console.log('Form is invalid');
      // Optionally, set an error message to display in the template
    }
  }
}
