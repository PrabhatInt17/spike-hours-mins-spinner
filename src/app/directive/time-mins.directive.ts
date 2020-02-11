import { Directive, Input, ElementRef, HostListener } from '@angular/core';
import { FormControl } from '@angular/forms';

@Directive({
  selector: '[TimeMins]'
})
export class TimeMinsDirective {
  @Input() executionTimeMins: FormControl;
  @Input() mins: String[];
  constructor(private el: ElementRef) {}

  @HostListener('input')
  onInput() {
    if (
      !(
        this.executionTimeMins.value.charCodeAt(0) >= 48 &&
        this.executionTimeMins.value.charCodeAt(0) <= 57
      )
    ) {
      this.executionTimeMins.setValue('');
    } else if (this.executionTimeMins.value.toString().length > 2) {
      this.executionTimeMins.setValue(
        this.executionTimeMins.value.toString().slice(0, 2)
      );
    }
  }
  @HostListener('blur')
  onBlur() {
    if (
      this.executionTimeMins.value.toString().length < 2 &&
      this.executionTimeMins.value.toString().length === 1
    ) {
      this.executionTimeMins.setValue('0' + this.executionTimeMins.value);
    } else if (
      isNaN(this.executionTimeMins.value) ||
      this.mins.indexOf(this.executionTimeMins.value) < 0
    ) {
      this.executionTimeMins.setErrors({
        forbiddenMinutes: true
      });
    }
  }
}
