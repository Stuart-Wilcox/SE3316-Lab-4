import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CoursesService } from '../courses.service';
import { AutoGrowDirective } from '../auto-grow.directive';
import { AddCourseDirective } from '../add-course.directive';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [CoursesService]
})
export class CoursesComponent implements OnInit {
  title: string = "Courses";
  courses: string[];
  courseServices: CoursesService;
  constructor(coursesService: CoursesService) {
    //dependency injection
    this.courses = coursesService.getCourses();
    this.courseServices = coursesService;
  }

  addCourse(event: any,courseName:string){
    event.preventDefault();
    this.courseServices.addCourse(courseName);
  }

  ngOnInit() {
  }

}
