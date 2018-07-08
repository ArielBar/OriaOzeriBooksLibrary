import { Component, AfterContentChecked, Input } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'herolo-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements AfterContentChecked {
    
        @Input() controlToValidate: FormControl;
        errors: Array<string>;
    
        // HTML-ארוע שיתבצע בכל שינוי בתבנית ה
        ngAfterContentChecked(): void {
            this.errors = new Array<string>(); // ניקוי הודעות קודמות
            if (this.controlToValidate.touched) {
                for (let key in this.controlToValidate.errors) {
                    this.errors.push(this.controlToValidate.errors[key]);
                }
            }
        }
    }
    
