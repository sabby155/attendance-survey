import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { Platform } from '@angular/cdk/platform';
import { BreakpointObserver } from '@angular/cdk/layout';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
  
  title = 'Attendance Hub';

  date = formatDate(new Date(), 'yyyy/MM/dd', 'en');

  userTypes = ['Teacher', 'Student'];

  constructor(
    public Platform: Platform,
    private breakpointObserver: BreakpointObserver,
  ) {}

  ngOnInit(): void {
    if (this.breakpointObserver.isMatched('(max-width: 600px)'))  {
      console.info("screen width is less than 600px!");
    }
  }

  users: User[] = [
    { value: 'student', viewValue: 'Student' },
    { value: 'teacher', viewValue: 'Teacher' },
  ];

}
interface User {
  value: string;
  viewValue: string;
}