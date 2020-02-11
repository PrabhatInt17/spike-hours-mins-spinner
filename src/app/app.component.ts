import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit {
  addExecutionFormGroup: FormGroup;
  constructor(private fb: FormBuilder) {}
  //hours = ["00","01","02","03","04","05","06","07","08","09","10","11"];
  hours: String[];
  mins: String[];
  timeSet: String;

  ngOnInit() {
    this.hours = [];
    this.mins = [];
    this.getHoursArray();
    this.getMinsArray();
    const time = moment().format('HH:mm');
    console.log(time);

    console.log(this.hours);
    this.addExecutionFormGroup = this.fb.group({
      executionTimeHRS: [
        moment().format('HH'),
        [Validators.maxLength(2), Validators.required]
      ],
      executionTimeMins: [
        moment().format('mm'),
        [Validators.maxLength(2), Validators.required]
      ],
      hoursControl: [this.getDefaultTime(), Validators.required]
    });
  }

  getHoursArray() {
    for (var i = 0; i < 24; i++) {
      if (i < 10) {
        this.hours.push('0' + i);
      } else {
        this.hours.push('' + i);
      }
    }
  }

  getMinsArray() {
    for (var i = 0; i < 60; i++) {
      if (i < 10) {
        this.mins.push('0' + i);
      } else {
        this.mins.push('' + i);
      }
    }
  }

  decrementHRS() {
    // this.numberValidation();
    // console.log(this.addExecutionFormGroup.controls.executionTimeHRS.value);
    // this.addExecutionFormGroup.controls.executionTimeHRS.setValue(
    //   this.addExecutionFormGroup.controls.executionTimeHRS.value.valueOf() - 1
    // );
    if (
      this.hours.indexOf(
        this.addExecutionFormGroup.controls.executionTimeHRS.value
      ) -
        1 <
      0
    ) {
      this.addExecutionFormGroup.controls.executionTimeHRS.setValue(
        this.hours[this.hours.length - 1]
      );
    } else {
      this.addExecutionFormGroup.controls.executionTimeHRS.setValue(
        this.hours[
          this.hours.indexOf(
            this.addExecutionFormGroup.controls.executionTimeHRS.value
          ) - 1
        ]
      );
    }
  }
  getDefaultTime() {
    return moment().format('HH:mm');
  }

  incrementHRS() {
    // this.numberValidation();
    // console.log(this.addExecutionFormGroup.controls.executionTimeHRS.value);
    // this.addExecutionFormGroup.controls.executionTimeHRS.setValue(
    //   this.addExecutionFormGroup.controls.executionTimeHRS.value.valueOf() + 1
    // );
    if (
      this.hours.indexOf(
        this.addExecutionFormGroup.controls.executionTimeHRS.value
      ) +
        1 >
      this.hours.length - 1
    ) {
      this.addExecutionFormGroup.controls.executionTimeHRS.setValue(
        this.hours[0]
      );
    } else {
      this.addExecutionFormGroup.controls.executionTimeHRS.setValue(
        this.hours[
          this.hours.indexOf(
            this.addExecutionFormGroup.controls.executionTimeHRS.value
          ) + 1
        ]
      );
    }
  }

  decrementMins() {
    // this.numberValidation();
    // console.log(this.addExecutionFormGroup.controls.executionTimeHRS.value);
    // this.addExecutionFormGroup.controls.executionTimeHRS.setValue(
    //   this.addExecutionFormGroup.controls.executionTimeHRS.value.valueOf() - 1
    // );
    if (
      this.mins.indexOf(
        this.addExecutionFormGroup.controls.executionTimeMins.value
      ) -
        1 <
      0
    ) {
      this.addExecutionFormGroup.controls.executionTimeMins.setValue(
        this.mins[this.mins.length - 1]
      );
    } else {
      this.addExecutionFormGroup.controls.executionTimeMins.setValue(
        this.mins[
          this.mins.indexOf(
            this.addExecutionFormGroup.controls.executionTimeMins.value
          ) - 1
        ]
      );
    }
  }

  incrementMins() {
    // this.numberValidation();
    // console.log(this.addExecutionFormGroup.controls.executionTimeHRS.value);
    // this.addExecutionFormGroup.controls.executionTimeHRS.setValue(
    //   this.addExecutionFormGroup.controls.executionTimeHRS.value.valueOf() + 1
    // );
    if (
      this.mins.indexOf(
        this.addExecutionFormGroup.controls.executionTimeMins.value
      ) +
        1 >
      this.mins.length - 1
    ) {
      this.addExecutionFormGroup.controls.executionTimeMins.setValue(
        this.mins[0]
      );
    } else {
      this.addExecutionFormGroup.controls.executionTimeMins.setValue(
        this.mins[
          this.mins.indexOf(
            this.addExecutionFormGroup.controls.executionTimeMins.value
          ) + 1
        ]
      );
    }
  }
  displayCounter(event) {
    console.log(event);
    this.timeSet = event;
  }
  ValidateForm() {
    //alert(this.timeSet);
    alert(this.addExecutionFormGroup.controls.hoursControl.value);
    if (this.addExecutionFormGroup.valid) {
      alert(
        'Execution Time is ' +
          this.addExecutionFormGroup.controls.executionTimeHRS.value +
          ' : ' +
          this.addExecutionFormGroup.controls.executionTimeMins.value
      );
    } else {
      alert('inValid Form');
    }
  }
}

// function checkValidation() {
//   if (
//     this.hours.indexOf(
//       this.addExecutionFormGroup.controls.executionTimeHRS.value
//     ) < 0
//   ) {
//     return true;
//   }
//   return false;
// }

// function timeHoursValidator(hours): ValidatorFn {
//   return (control: AbstractControl): { [key: string]: any } | null => {
//     const forbidden = this.hours.indexOf(control.value);
//     return control.touched && !control.pristine && forbidden < 0
//       ? { forbiddenHours: { value: control.value } }
//       : null;
//   };
// }

// // function timeHoursValidator(
// //   control: AbstractControl
// // ): { [key: string]: boolean } | null {
// //   console.log(this.hours.indexOf(control.value.toString()));
// //   if (
// //     control.value !== undefined &&
// //     (isNaN(control.value) || this.hours.indexOf(control.value.toString()) < 0)
// //   ) {
// //     return { valid: false };
// //   }
// //   return null;
// // }

