import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  calendar: number[][] = [];
  currentDate!: Date;
  selectedMonth!: number;
  selectedYear!: number;
  selectedDate!: string;

  constructor() { }

  ngOnInit(): void {
    this.currentDate = new Date();
    this.selectedMonth = this.currentDate.getMonth();
    this.selectedYear = this.currentDate.getFullYear();
    this.generateCalendar();
  }

  generateCalendar(): void {
    const firstDay = new Date(this.selectedYear, this.selectedMonth, 1).getDay();
    const daysInMonth = new Date(this.selectedYear, this.selectedMonth + 1, 0).getDate();

    let day = 1;
    this.calendar = [];

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

    return (
      day === currentDay &&
      this.selectedYear === currentYear &&
      this.selectedMonth === currentMonth
    );
  }

  isToday(day: number): boolean {
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    return (
      day === currentDay &&
      this.selectedYear === currentYear &&
      this.selectedMonth === currentMonth
    );
  }

  navigateToMonth(month: number): void {
    this.selectedMonth += month;

    if (this.selectedMonth < 0) {
      this.selectedMonth = 11;
      this.selectedYear--;
    } else if (this.selectedMonth > 11) {
      this.selectedMonth = 0;
      this.selectedYear++;
    }

    this.generateCalendar();
  }

  navigateToYear(year: number): void {
    this.selectedYear += year;
    this.generateCalendar();
  }

  updateCalendar(): void {
    const date = new Date(this.selectedDate);
    this.selectedMonth = date.getMonth();
    this.selectedYear = date.getFullYear();
    this.generateCalendar();
  }

  isSelectedDate(day: number): boolean {
    const selectedDate = new Date(this.selectedDate).getDate();
    const selectedMonth = new Date(this.selectedDate).getMonth();
    const selectedYear = new Date(this.selectedDate).getFullYear();

    return (
      day === selectedDate &&
      this.selectedYear === selectedYear &&
      this.selectedMonth === selectedMonth
    );
  }
}
