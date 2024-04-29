import { Component } from '@angular/core';
import { Courses } from '../model/courses';
import { CoursesService } from '../services/courses.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent {
  // Properties
  courses: Courses[] = [];
  filteredCourses: Courses[] = [];
  filterValue: string = "";
  sortedCourses: Courses[] = [];
  sortedValue: string = "";

  constructor(private courseService: CoursesService) { }

  ngOnInit() {
    this.courseService.getCourses().subscribe((courses) => {
      this.courses = courses;
      this.filteredCourses = courses;
    });
  }

  applyFilter(): void {
    this.filteredCourses = this.courses.filter((course) =>
      course.code.toLowerCase().includes(this.filterValue.toLowerCase()) ||
      course.coursename.toLowerCase().includes(this.filterValue.toLowerCase())
    );
  }

  sortFilter(sortBy: string): void {
    switch (sortBy) {
      case 'kurskod':
        this.filteredCourses = this.courses.slice().sort((a, b) => a.code.localeCompare(b.code));
        break;

      case 'kursnamn':
        this.filteredCourses = this.courses.slice().sort((a, b) => a.coursename.localeCompare(b.coursename));
        break;

      case 'progression':
        this.filteredCourses = this.courses.slice().sort((a, b) => a.progression.localeCompare(b.progression));
        break;
      
      default:
        break;
    }
  }
  
}
