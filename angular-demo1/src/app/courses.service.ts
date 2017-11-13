import { Injectable } from '@angular/core';

@Injectable()
export class CoursesService {
  _courses : string[];
  constructor() {
    this._courses = ['Course1', 'Course2', 'Course3'];
  }

  getCourses(): string[]{
    //pretend we contact server here
    return this._courses;
  }

  addCourse(course : string) {
    this._courses.push(course);
  }

}
