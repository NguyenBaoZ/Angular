import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Author } from '../authors.model';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css']
})
export class AuthorDetailComponent {
  @Input() author : Author | undefined
  @Output() select = new EventEmitter<Author>()
  @Output() delete = new EventEmitter<Number>()

  constructor() {}
  ngOnInit() {}
}
