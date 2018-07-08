import { ValidatorFn } from "@angular/forms";
import { Val } from "../val";

export class Book {
    constructor(

        public id: number,
        public author_name: string,
        public book_title: string,
        public description: string,
        public published_date: string

    ) { }
    public static get textValidators(): ValidatorFn[] {
        return [Val.required(), Val.minLength(5), Val.maxLength(35)]; // Default Messages.
    }

    public static get descriptionValidators(): ValidatorFn[] {
        return [Val.minLength(15)];
    }
 
    public static get dateValidators(): ValidatorFn[] {
        return [Val.required(),Val.dateValidation()];

    }
}