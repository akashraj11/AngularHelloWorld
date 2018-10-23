import {Component} from '@angular/core';
import {AuthorService} from '../services/author.service'


@Component({
    selector: 'authors',
    template: `<h2>{{Title}}</h2>
    <ul>
        <li *ngFor="let author of authors">
            {{author}}
        </li>
    </ul>
    `,
    providers: [AuthorService]
})

export class AuthorComponent{
    Title = "List of Authors";
    authors;

    constructor(authorService : AuthorService){
        this.authors =authorService.getAuthor();
    }
}