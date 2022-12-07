import { Component } from '@angular/core';
import { Author, authors } from '../authors.model';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent {
  authors = authors
  chosenUser = authors[0];
  constructor() {}
  ngOnInit() {}

  onSelected(selectedaAuthor: Author){
    this.chosenUser = selectedaAuthor
  }
  handleDelete(authorId: Number){
    this.authors = this.authors.filter(author => {
      return author.id != authorId
    })
    if(this.chosenUser.id == authorId){
      this.chosenUser = authors[0];
    }
  }
}
