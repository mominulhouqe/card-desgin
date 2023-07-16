import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  calendar: number[][] = [];
  currentDate!: Date;

  constructor() { }

  ngOnInit(): void {
    this.currentDate = new Date();
    this.generateCalendar();
  }

  generateCalendar(): void {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let day = 1;
    for (let i = 0; i < 6; i++) {
      const week: number[] = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDay) {
          week.push(0);
        } else if (day > daysInMonth) {
          break;
        } else {
          week.push(day);
          day++;
        }
      }
      this.calendar.push(week);
    }
  }

  isCurrentDay(day: number): boolean {
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    return day === currentDay && this.currentDate.getMonth() === currentMonth && this.currentDate.getFullYear() === currentYear;
  }

  isToday(day: number): boolean {
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    return day === currentDay && this.currentDate.getMonth() === currentMonth && this.currentDate.getFullYear() === currentYear;
  }
}
