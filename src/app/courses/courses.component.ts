import {Component} from '@angular/core';
import {CoursesService} from '../services/courses.service'


@Component({
    selector: 'courses',
    template: `<h2>{{Title}}</h2>
    <ul>
        <li *ngFor="let course of courses">
            {{course}}
        </li>
    </ul>
    `,
    providers: [CoursesService]
})

export class CoursesComponent{
    Title = "List of Courses";
    courses;

    constructor(coursesService : CoursesService){
        this.courses =coursesService.getCourses();
    }
}