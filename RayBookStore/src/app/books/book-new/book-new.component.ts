import { Component, OnInit, OnDestroy } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { BookDataService } from '../books/book-data.service';
import { Subscription, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.scss'],
})
export class BookNewComponent implements OnInit, OnDestroy {
  bookForm: FormGroup;
  sub: Subscription;
  check = new Subject();

  constructor(
    private fb: FormBuilder,
    private bookData: BookDataService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    const publisher = this.fb.group({
      name: ['', [Validators.required]],
      url: ['', [Validators.required]],
    });

    this.bookForm = this.fb.group({
      title: ['', [Validators.required]],
      subtitle: ['', [Validators.required]],
      isbn: [''],
      abstract: ['', [Validators.required]],
      numPages: ['', [Validators.required]],
      author: ['', [Validators.required]],
      publisher: publisher,
      cover: ['', [Validators.required]],
    });
  }

  createNewBook() {
    this.bookData
      .postNewBook(this.bookForm.value)
      .pipe(takeUntil(this.check))
      .subscribe((data) =>
        this.router.navigate(['..', data.isbn], { relativeTo: this.route })
      );
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.check.next;
  }
}
