import { Component } from '@angular/core';
import { AuthorService } from '../author.service';

@Component({
  selector: 'author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent {

  authors : any[];

  constructor(authorService : AuthorService){
this.authors = authorService.getAuthors();
 console.log('number of authors', this.authors);
  }
}
