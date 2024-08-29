import { AsyncPipe } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { firstValueFrom, tap } from 'rxjs';
import { Author } from '../../model/author.model';
import { AuthorService } from '../../services/author.service';
import { BookFormComponent } from '../book-form/book-form.component';

@Component({
  selector: 'app-author-form',
  standalone: true,
  imports: [ReactiveFormsModule, BookFormComponent, AsyncPipe],
  templateUrl: './author-form.component.html',
  styleUrl: './author-form.component.scss',
})
export class AuthorFormComponent {
  private _formBuilder = inject(FormBuilder);
  private _authorService = inject(AuthorService);

  public authorId = input('');

  public author = computed(async () => {
    const id = this.authorId();
    if (!id) return null;
    return await firstValueFrom(
      this._authorService
        .getAuthor(id)
        .pipe(tap((author) => this._patchAuthorToForm(author)))
    );
  });

  form = this._formBuilder.group({
    id: '',
    firstname: '',
    lastname: '',
    birthdate: '',
    tpw: 0,
    books: this._formBuilder.array<FormGroup<any>>([]),
  });

  private _patchAuthorToForm(author: Author) {
    this.form.controls.books.clear();
    var tpw = 0;
    author.books.forEach((book) => {
      this.form.controls.books.push(
        this._formBuilder.group({
          id: book.id,
          title: book.title,
          pages: book.pages,
        } as any)
      );
      tpw += book.pages;
    });
    this.form.patchValue({ ...author, tpw });
  }
}
