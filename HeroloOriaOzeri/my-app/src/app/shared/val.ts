import { ValidatorFn, FormControl } from "@angular/forms";

export class Val {

    static required(errorMessage: string = "This field is required."): ValidatorFn {
        return (formControl: FormControl) => formControl.value === null || formControl.value === "" ? { [Val.key]: errorMessage } : null;
    }

    static minLength(length: number, errorMessage: string = `Length can't be shorter than ${length} chars.`): ValidatorFn {
        return (formControl: FormControl) => formControl.value.length < length ? { [Val.key]: errorMessage } : null;
    }

    static maxLength(length: number, errorMessage: string = `Length can't be longer than ${length} chars.`): ValidatorFn {
        return (formControl: FormControl) => formControl.value.length > length ? { [Val.key]: errorMessage } : null;
    }

    static nonNegative(errorMessage: string = "This field can't be negative or 0"): ValidatorFn {
        return (formControl: FormControl) => +formControl.value < 0 ? { [Val.key]: errorMessage } : null;
    }


    static letters(errorMessage: string = "This field has to be only letters"): ValidatorFn {
        return (formControl: FormControl) =>
            formControl.value =="[a-zA-Z ]*"  ? { [Val.key]: errorMessage } : null;
    }
    static dateValidation(errorMessage: string = "Invalid Date"): ValidatorFn {
        return (formControl: FormControl) =>
        formControl.value =="/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/g" ? { [Val.key]: errorMessage } : null;
    }


    private static _key: number = 0;
    private static get key(): string {
        return "error_" + Val._key++;
    }



}