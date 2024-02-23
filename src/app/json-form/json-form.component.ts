import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface JsonFormValidators {
  min?: number;
  max?: number;
  required?: boolean;
  requiredTrue?: boolean;
  email?: boolean;
  minLength?: boolean;
  maxLength?: boolean;
  pattern?: string;
  nullValidator?: boolean;
}
interface JsonFormControlOptions {
  min?: string;
  max?: string;
  step?: string;
  icon?: string;
}
interface JsonFormControls {
  name: string;
  label: string;
  value: string;
  type: string;
  options?: JsonFormControlOptions;
  required: boolean;
  validators: JsonFormValidators;
}
export interface JsonFormData {
  controls: JsonFormControls[];
}

@Component({
  selector: 'app-json-form',
  templateUrl: './json-form.component.html',
  styleUrls: ['./json-form.component.scss']
})
export class JsonFormComponent {
  @Input() jsonFormData: any;
  @Input() currentView: any;
  @Input() dataToPopulate: any;
  @Output() getDependentFormFiels = new EventEmitter();
  @Output() savedData = new EventEmitter();
  public myForm: FormGroup = this.fb.group({});
  viewMode: boolean = false;
  editMode: boolean = false;
  dropdownSettings = { 
    singleSelection: true, 
    enableSearchFilter: true,
    showCheckbox: false,
    disabled: false,
    classes:"myclass custom-class"
  }; 
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    console.log(this.jsonFormData);
  }
  ngOnChanges(changes: SimpleChanges) {
    if (this.jsonFormData) {
      this.createForm(this.jsonFormData.controls);
    }

    if(this.currentView == 'View'){ 
      this.viewMode = true;
      this.editMode = false;
      this.dropdownSettings = { 
        singleSelection: true, 
        enableSearchFilter: true,
        showCheckbox: false,
        disabled: true,
        classes:"myclass custom-class"
      }
    }else if(this.currentView == 'Edit'){
      this.editMode = true;
      this.viewMode = false;
      this.dropdownSettings = { 
        singleSelection: true, 
        enableSearchFilter: true,
        showCheckbox: false,
        disabled: false,
        classes:"myclass custom-class"
      }; 
    }else{
      this.editMode = false;
      this.viewMode = false;
      this.dropdownSettings = { 
        singleSelection: true, 
        enableSearchFilter: true,
        showCheckbox: false,
        disabled: false,
        classes:"myclass custom-class"
      }; 
      setTimeout(() => {
        this.myForm.reset();
      },1000)
    }

    if(this.dataToPopulate){
      this.myForm.setValue(JSON.parse(this.dataToPopulate))
    }
  
  }

  createForm(controls: JsonFormControls[]) {
    for (const control of controls) {
      const validatorsToAdd = [];
      for (const [key, value] of Object.entries(control.validators)) {
        switch (key) {
          case 'min':
            validatorsToAdd.push(Validators.min(value));
            break;
          case 'max':
            validatorsToAdd.push(Validators.max(value));
            break;
          case 'required':
            if (value) { validatorsToAdd.push(Validators.required); }
            break;
          case 'requiredTrue':
            if (value) { validatorsToAdd.push(Validators.requiredTrue) }
            break;
          case 'email':
            if (value) { validatorsToAdd.push(Validators.email); }
            break;
          case 'minLength':
            validatorsToAdd.push(Validators.minLength(value));
            break;
          case 'maxLength':
            validatorsToAdd.push(Validators.maxLength(value));
            break;
          case 'pattern':
            validatorsToAdd.push(Validators.pattern(eval(value)));
            break;
          case 'nullValidator':
            if (value) { validatorsToAdd.push(Validators.nullValidator) }
            break;
          default:
            break;
        }
      }
      this.myForm.addControl(control.name, this.fb.control(control.value, validatorsToAdd));
    }
  }

  onOptionChange(event: any, index:number, control:any) {
    const selectedOption = event.value;
    console.log(event);
    console.log(index);
    console.log(control);
    
    const data = {
      "value": selectedOption,
      "index": index,
      "control": control.name
    }
    // this.getDependentFormFiels.emit(data)
    this.getDependentOptions(data);
  }

  getDependentOptions(event:any){
    let parentControl = this.jsonFormData.controls.find((control:any) => control.name == event.control);
    let childControl = this.jsonFormData.controls.find((control:any) => control.parent == event.control);
    if (childControl && parentControl && parentControl.childOptions) {
      childControl.options = parentControl.childOptions.filter((options:any) => { return options.parent == event.value})
      console.log(childControl);
    }
    // this.jsonForm.controls.push(this.newField)
    // this.jsonForm.controls.splice(event.index + 1, 0, this.newField)
  }

  onSubmit() {
    console.log('Form valid: ', this.myForm.valid);
    console.log('Form values: ', this.myForm.value);
    this.savedData.emit(this.myForm.value);
    //TODO Save data in db
    localStorage.setItem('savedData', JSON.stringify(this.myForm.value))
  }

  resetForm(){
    this.myForm.reset();
  }
  onItemSelect(e:any){

  }

  checkView(){
    if(this.currentView == 'View'){
      return false;
    }else{
      return true;
    }
  }
}
