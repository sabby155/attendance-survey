import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { Platform } from '@angular/cdk/platform';
import { BreakpointObserver } from '@angular/cdk/layout';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

interface User {
  value: string;
  viewValue: string;
}

export interface UserName {
  name: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnInit {
  
  title = 'Attendance Hub';

  date = formatDate(new Date(), 'yyyy/MM/dd', 'en');

  userTypes = ['Teacher', 'Student'];

  myControl = new FormControl<string | UserName>('');
  options: UserName[] = [
    { name: 'Mary' }, 
    { name: 'Shelley' }, 
    { name: 'Igor' }
  ];
  filteredOptions: Observable<UserName[]> | undefined;

  constructor(
    public Platform: Platform,
    private breakpointObserver: BreakpointObserver,
  ) {}

  ngOnInit(): void {
    if (this.breakpointObserver.isMatched('(max-width: 600px)'))  {
      console.info("screen width is less than 600px!");
    }

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );
  }

  users: User[] = [
    { value: 'student', viewValue: 'Student' },
    { value: 'teacher', viewValue: 'Teacher' },
  ];

  displayFn(user: UserName): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): UserName[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
  }

}
