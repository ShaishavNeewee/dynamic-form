import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  jsonForm = {
    "controls": [
      {
        "name": "firstName",
        "label": "First name:",
        "info": 'First Name',
        "value": "",
        "type": "text",
        "dependent": false,
        "parent": "",
        "validators": {
          "required": true,
          "minLength": 10,
          "pattern": "(/^[A-Za-z]+$/)"
        }
      },
      {
        "name": "lastName",
        "label": "Last name:",
        "info": 'Last Name',
        "value": "",
        "type": "text",
        "dependent": false,
        "parent": "",
        "validators": {}
      },
      {
        "name": "email",
        "label": "Email:",
        "info": 'Enter last name.',
        "value": "",
        "type": "text",
        "dependent": false,
        "parent": "",
        "validators": {
          "email": true
        }
      },
      {
        "name": "comments",
        "label": "Comments",
        "info": 'Enter additional comment.',
        "value": "",
        "type": "textarea",
        "dependent": false,
        "parent": "",
        "validators": {}
      },
      {
        "name": "agreeTerms",
        "label": "This is a checkbox?",
        "info": 'Mark true or false',
        "value": false,
        "type": "checkbox",
        "dependent": false,
        "parent": "",
        "validators": {}
      },
      {
        "name": "gender",
        "label": "Select gender:",
        "info": 'Select your gender.',
        "value": "",
        "type": "radio",
        "dependent": false,
        "parent": "",
        "options": [
          { displayName: 'Male', value: 'Male' },
          { displayName: 'Female', value: 'Female' }
        ],
        "validators": {}
      },
      {
        "name": "size",
        "label": "",
        "value": "",
        "type": "range",
        "dependent": false,
        "parent": "",
        "option": {
          "min": "0",
          "max": "100",
          "step": "1",
          "icon": "sunny"
        },
        "validators": {}
      },
      {
        "name": "uom",
        "label": "UOM",
        "value": "",
        "type": "select",
        "dependent": true,
        "parent": "",
        "options": [
          {
            id: 1,
            itemName: 'Option 1',
            value: 'Option 1'
          },
          {
            id:2,
            itemName: 'Option 2',
            value: 'Option 2'
          }
        ],
        "childOptions": [{
          id: 1,
          itemName: 'Option 1',
          value: 'Option 1',
          parent: 'Option 1'
        },
        {
          id:2,
          itemName: 'Option 2',
          value: 'Option 2',
          parent: 'Option 1'
        }, {
          id:3,
          itemName: 'Option 3',
          value: 'Option 3',
          parent: 'Option 2'
        },
        {
          id:4,
          itemName: 'Option 4',
          value: 'Option 4',
          parent: 'Option 2'
        }],
        "validators": {
          "required": true,
        }
      },
      {
        "name": "weight",
        "label": "Weight",
        "value": "",
        "type": "select",
        "parent": "uom",
        "dependent": false,
        "options": [],
        "validators": {
          "required": true,
        }
      },
      {
        "name": "dob",
        "label": "Date of birth",
        "value": "",
        "type": "date",
        "dependent": false,
        "parent": "",
        "min": "2023-01-01",
        "max": "2023-01-31",
        "validators": {}
      }
    ]
  }

  title = 'dynamic-form-poc';

  currentView = 'New'
  constructor() { }
  ngOnInit() {

  }

  dataToPopulate: any;
  saveData:any
  changeView(currentView: string) {
    console.log(currentView);
    this.currentView = currentView;
    if(currentView != 'New'){
      this.dataToPopulate = localStorage.getItem('savedData');
    }
  }

  callSaveData(data: any) {
    console.log(data);
    this.saveData = data;
  }
}
