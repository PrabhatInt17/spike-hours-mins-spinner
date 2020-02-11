import { Directive, ElementRef, Input, HostListener } from '@angular/core';
import { FormGroup, AbstractControl, FormControl } from '@angular/forms';

@Directive({
  selector: '[TimeHours]'
})
export class TimeHoursDirective {
  @Input() executionTimeHRS: FormControl;

  @Input() hours: String[];

  constructor(private el: ElementRef) {}

  @HostListener('input')
  onInput() {
    if (
      !(
        this.executionTimeHRS.value.charCodeAt(0) >= 48 &&
        this.executionTimeHRS.value.charCodeAt(0) <= 57
      )
    ) {
      this.executionTimeHRS.setValue('');
    } else if (this.executionTimeHRS.value.toString().length > 2) {
      this.executionTimeHRS.setValue(
        this.executionTimeHRS.value.toString().slice(0, 2)
      );
    }
  }

  // @HostListener('document:keydown', ['$event'])
  // onInput(event: KeyboardEvent) {
  //   if (event.keyCode === 38) {
  //     if (
  //       this.executionTimeHRS.value.toString().length < 2 &&
  //       this.executionTimeHRS.value.toString().length === 1
  //     ) {
  //       this.executionTimeHRS.setValue('0' + this.executionTimeHRS.value);
  //     }
  //     if (
  //       this.hours.indexOf(this.executionTimeHRS.value) + 1 >
  //       this.hours.length - 1
  //     ) {
  //       this.executionTimeHRS.setValue(this.hours[0]);
  //     } else {
  //       this.executionTimeHRS.setValue(
  //         this.hours[this.hours.indexOf(this.executionTimeHRS.value) + 1]
  //       );
  //     }
  //   } else if (event.keyCode === 40) {
  //     if (
  //       this.executionTimeHRS.value.toString().length < 2 &&
  //       this.executionTimeHRS.value.toString().length === 1
  //     ) {
  //       this.executionTimeHRS.setValue('0' + this.executionTimeHRS.value);
  //     }
  //     if (this.hours.indexOf(this.executionTimeHRS.value) - 1 < 0) {
  //       this.executionTimeHRS.setValue(this.hours[this.hours.length - 1]);
  //     } else {
  //       this.executionTimeHRS.setValue(
  //         this.hours[this.hours.indexOf(this.executionTimeHRS.value) - 1]
  //       );
  //     }
  //   } else if (
  //     (event.keyCode >= 48 && event.keyCode <= 57) ||
  //     (event.keyCode >= 96 && event.keyCode <= 105)
  //   ) {
  //     if (this.executionTimeHRS.value.toString().length > 2) {
  //       this.executionTimeHRS.setValue(
  //         this.executionTimeHRS.value.toString().slice(0, 2)
  //       );
  //     }
  //   }
  // }

  @HostListener('blur')
  onBlur() {
    if (
      this.executionTimeHRS.value.toString().length < 2 &&
      this.executionTimeHRS.value.toString().length === 1
    ) {
      this.executionTimeHRS.setValue('0' + this.executionTimeHRS.value);
    } else if (
      isNaN(this.executionTimeHRS.value) ||
      this.hours.indexOf(this.executionTimeHRS.value) < 0
    ) {
      this.executionTimeHRS.setErrors({
        forbiddenHours: true
      });
    }
  }
}
