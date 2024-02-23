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
        "value": "",
        "type": "text",
        "dependent": false,
        "parent": "",
        "validators": {}
      },
      {
        "name": "email",
        "label": "Email:",
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
        "value": "",
        "type": "textarea",
        "dependent": false,
        "parent": "",
        "validators": {}
      },
      {
        "name": "agreeTerms",
        "label": "This is a checkbox?",
        "value": false,
        "type": "checkbox",
        "dependent": false,
        "parent": "",
        "validators": {}
      },
      {
        "name": "gender",
        "label": "Select gender:",
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

  newJsonData = {
    "controls": [
      {
        "name": "firstName",
        "label": "First name:",
        "value": "Neewee",
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
        "value": "Analytics",
        "type": "text",
        "dependent": false,
        "parent": "",
        "validators": {}
      },
      {
        "name": "email",
        "label": "Email:",
        "value": "test@neewee.ai",
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
        "value": "This is default comment",
        "type": "textarea",
        "dependent": false,
        "parent": "",
        "validators": {}
      },
      {
        "name": "agreeTerms",
        "label": "This is a checkbox?",
        "value": true,
        "type": "checkbox",
        "dependent": false,
        "parent": "",
        "validators": {}
      },
      {
        "name": "gender",
        "label": "Select gender:",
        "value": "Male",
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
        "value": "25",
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
          id:1,
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
        "value": "2023-01-25",
        "type": "date",
        "dependent": false,
        "parent": "",
        "min": "2023-01-01",
        "max": "2023-01-31",
        "validators": {}
      }
    ]
  }


  newControl = [
    {
      "id": 6,
      "display_name": "login_lock_duration",
      "preference_key": "login_lock_duration",
      "preference_value": 1,
      "value_list": "",
      "preference_group": "login_attempt",
      "preference_value_data_type": "timestamp",
      "is_admin_view": "TRUE",
      "tenant_id": 1
    },
    {
      "id": 1,
      "display_name": "A Capital (Upper Case) Letter",
      "preference_key": "upper_case",
      "preference_value": "TRUE",
      "value_list": "",
      "preference_group": "password",
      "preference_value_data_type": "boolean",
      "is_admin_view": "TRUE",
      "tenant_id": 1
    },
    {
      "id": 3,
      "display_name": "A Number",
      "preference_key": "number",
      "preference_value": "TRUE",
      "value_list": "",
      "preference_group": "password",
      "preference_value_data_type": "boolean",
      "is_admin_view": "TRUE",
      "tenant_id": 1
    },
    {
      "id": 7,
      "display_name": "Maximum Length",
      "preference_key": "max_length",
      "preference_value": 20,
      "value_list": "",
      "preference_group": "password",
      "preference_value_data_type": "number",
      "is_admin_view": "TRUE",
      "tenant_id": 1
    },
    {
      "id": 5,
      "display_name": "Special Characters",
      "preference_key": "special_characters",
      "preference_value": "@#$%",
      "value_list": "",
      "preference_group": "password",
      "preference_value_data_type": "text",
      "is_admin_view": "TRUE",
      "tenant_id": 1
    },
    {
      "id": 8,
      "display_name": "allowed_login_attempts",
      "preference_key": "allowed_login_attempts",
      "preference_value": 100,
      "value_list": "",
      "preference_group": "login_attempt",
      "preference_value_data_type": "number",
      "is_admin_view": "TRUE",
      "tenant_id": 1
    },
    {
      "id": 4,
      "display_name": "Minimum Length",
      "preference_key": "min_length",
      "preference_value": 8,
      "value_list": "",
      "preference_group": "password",
      "preference_value_data_type": "number",
      "is_admin_view": "TRUE",
      "tenant_id": 1
    },
    {
      "id": 10,
      "display_name": "Timezone",
      "preference_key": "timezone",
      "preference_value": "Europe/Budapest",
      "value_list": "",
      "preference_group": "localization",
      "preference_value_data_type": "text",
      "is_admin_view": "TRUE",
      "tenant_id": 1
    },
    {
      "id": 9,
      "display_name": "Language",
      "preference_key": "language",
      "preference_value": "English(en)",
      "value_list": "English(en), French(fr)",
      "preference_group": "language",
      "preference_value_data_type": "text",
      "is_admin_view": "TRUE",
      "tenant_id": 1
    },
    {
      "id": 12,
      "display_name": "user_mode",
      "preference_key": "user_mode",
      "preference_value": "Operator",
      "value_list": "",
      "preference_group": "user_mode",
      "preference_value_data_type": "text",
      "is_admin_view": "TRUE",
      "tenant_id": 1
    },
    {
      "id": 13,
      "display_name": "Shift Duration",
      "preference_key": "shiftDuration",
      "preference_value": 8,
      "value_list": "",
      "preference_group": "shiftDuration",
      "preference_value_data_type": "number",
      "is_admin_view": "TRUE",
      "tenant_id": 1
    },
    {
      "id": 14,
      "display_name": "immediate_enr_required",
      "preference_key": "immediate_enr_required",
      "preference_value": "FALSE",
      "value_list": "",
      "preference_group": "immediate_enr_required",
      "preference_value_data_type": "boolean",
      "is_admin_view": "TRUE",
      "tenant_id": 1
    },
    {
      "id": 2,
      "display_name": "A Lower Case Letter",
      "preference_key": "small_case",
      "preference_value": "TRUE",
      "value_list": "",
      "preference_group": "password",
      "preference_value_data_type": "boolean",
      "is_admin_view": "TRUE",
      "tenant_id": 1
    },
    {
      "id": 15,
      "display_name": "Internal Material",
      "preference_key": "internal_material",
      "preference_value": "TRUE",
      "value_list": "",
      "preference_group": "internal_material",
      "preference_value_data_type": "boolean",
      "is_admin_view": "FALSE",
      "tenant_id": 1
    },
    {
      "id": 16,
      "display_name": "IS_AUTOMATED",
      "preference_key": "is_automated",
      "preference_value": "FALSE",
      "value_list": "",
      "preference_group": "IS_AUTOMATED",
      "preference_value_data_type": "boolean",
      "is_admin_view": "TRUE",
      "tenant_id": 1
    },
    {
      "id": 17,
      "display_name": "IS_LIVE",
      "preference_key": "is_live",
      "preference_value": "FALSE",
      "value_list": "",
      "preference_group": "IS_LIVE",
      "preference_value_data_type": "boolean",
      "is_admin_view": "TRUE",
      "tenant_id": 1
    },
    {
      "id": 18,
      "display_name": "MANDATORY_COMMENT",
      "preference_key": "mandatory_comment",
      "preference_value": "FALSE",
      "value_list": "",
      "preference_group": "MANDATORY_COMMENT",
      "preference_value_data_type": "boolean",
      "is_admin_view": "TRUE",
      "tenant_id": 1
    },
    {
      "id": 19,
      "display_name": "PREP_CLEANING_REQUIRED",
      "preference_key": "prep_cleaning_required",
      "preference_value": "TRUE",
      "value_list": "",
      "preference_group": "PREP_CLEANING_REQUIRED",
      "preference_value_data_type": "boolean",
      "is_admin_view": "TRUE",
      "tenant_id": 1
    },
    {
      "id": 20,
      "display_name": "IS_DEMO",
      "preference_key": "is_demo",
      "preference_value": "FALSE",
      "value_list": "",
      "preference_group": "IS_DEMO",
      "preference_value_data_type": "boolean",
      "is_admin_view": "TRUE",
      "tenant_id": 1
    },
    {
      "id": 21,
      "display_name": "HIDEPLANT",
      "preference_key": "hide_plant",
      "preference_value": "TRUE",
      "value_list": "",
      "preference_group": "HIDEPLANT",
      "preference_value_data_type": "boolean",
      "is_admin_view": "TRUE",
      "tenant_id": 1
    },
    {
      "id": 22,
      "display_name": "PLANT_NAME",
      "preference_key": "plant_name",
      "preference_value": "",
      "value_list": "",
      "preference_group": "PLANT_NAME",
      "preference_value_data_type": "text",
      "is_admin_view": "TRUE",
      "tenant_id": 1
    },
    {
      "id": 23,
      "display_name": "REGIONAL_LANGUAGE",
      "preference_key": "regional_language",
      "preference_value": "",
      "value_list": "",
      "preference_group": "",
      "preference_value_data_type": "text",
      "is_admin_view": "TRUE",
      "tenant_id": 1
    },
    {
      "id": 24,
      "display_name": "DEFAULTZOOM",
      "preference_key": "default_zoom",
      "preference_value": 1,
      "value_list": "",
      "preference_group": "DEFAULTZOOM",
      "preference_value_data_type": "number",
      "is_admin_view": "TRUE",
      "tenant_id": 1
    },
    {
      "id": 25,
      "display_name": "HIDE_VSB",
      "preference_key": "hide_vsb",
      "preference_value": "FALSE",
      "value_list": "",
      "preference_group": "HIDE_VSB",
      "preference_value_data_type": "boolean",
      "is_admin_view": "TRUE",
      "tenant_id": 1
    },
    {
      "id": 27,
      "display_name": "CUSTOM_ORDERING",
      "preference_key": "custom_ordering",
      "preference_value": "FALSE",
      "value_list": "",
      "preference_group": "CUSTOM_ORDERING",
      "preference_value_data_type": "boolean",
      "is_admin_view": "TRUE",
      "tenant_id": 1
    },
    {
      "id": 28,
      "display_name": "SIDE_TASK",
      "preference_key": "side_task",
      "preference_value": "FALSE",
      "value_list": "",
      "preference_group": "SIDE_TASK",
      "preference_value_data_type": "boolean",
      "is_admin_view": "TRUE",
      "tenant_id": 1
    },
    {
      "id": 29,
      "display_name": "IS_WORKFLOW_TRIGGER_ENABLED",
      "preference_key": "is_workflow_trigger_enabled",
      "preference_value": "FALSE",
      "value_list": "",
      "preference_group": "IS_WORKFLOW_TRIGGER_ENABLED",
      "preference_value_data_type": "numeric",
      "is_admin_view": "TRUE",
      "tenant_id": 1
    },
    {
      "id": 30,
      "display_name": "INTERVAL_IN_MINUTES_BEFORE_CURRENT_TIME",
      "preference_key": "interval_in_minutes_enabled",
      "preference_value": 0,
      "value_list": "",
      "preference_group": "IS_WORKFLOW_TRIGGER_ENABLED",
      "preference_value_data_type": "boolean",
      "is_admin_view": "TRUE",
      "tenant_id": 1
    },
    {
      "id": 31,
      "display_name": "PROCESS_ORDER_FLAG",
      "preference_key": "process_order_flag",
      "preference_value": "FALSE",
      "value_list": "",
      "preference_group": "PROCESS_ORDER_FLAG",
      "preference_value_data_type": "boolean",
      "is_admin_view": "TRUE",
      "tenant_id": 1
    },
    {
      "id": 32,
      "display_name": "SFG_BATCHES_CALCULATE",
      "preference_key": "sfg_batches_calculate",
      "preference_value": "FALSE",
      "value_list": "",
      "preference_group": "SFG_BATCHES_CALCULATE",
      "preference_value_data_type": "boolean",
      "is_admin_view": "TRUE",
      "tenant_id": 1
    },
    {
      "id": 34,
      "display_name": "EQUIPMENT_RELAUNCH_THRESHOLD",
      "preference_key": "equipment_relaunch_threshold",
      "preference_value": 90,
      "value_list": "",
      "preference_group": "EQUIPMENT_RELAUNCH_THRESHOLD",
      "preference_value_data_type": "numeric",
      "is_admin_view": "TRUE",
      "tenant_id": 1
    },
    {
      "id": 35,
      "display_name": "WORKFLOW_JOB",
      "preference_key": "workflow_job",
      "preference_value": "FALSE",
      "value_list": "",
      "preference_group": "WORKFLOW_JOB",
      "preference_value_data_type": "boolean",
      "is_admin_view": "TRUE",
      "tenant_id": 1
    },
    {
      "id": 36,
      "display_name": "AUTO_START",
      "preference_key": "auto_start",
      "preference_value": "FALSE",
      "value_list": "",
      "preference_group": "AUTO_START",
      "preference_value_data_type": "boolean",
      "is_admin_view": "TRUE",
      "tenant_id": 1
    },
    {
      "id": 37,
      "display_name": "AUTO_END",
      "preference_key": "auto_end",
      "preference_value": "FALSE",
      "value_list": "",
      "preference_group": "AUTO_END",
      "preference_value_data_type": "boolean",
      "is_admin_view": "TRUE",
      "tenant_id": 1
    },
    {
      "id": 38,
      "display_name": "BATCH_AUTO_VALIDATION",
      "preference_key": "batch_auto_validation",
      "preference_value": "FALSE",
      "value_list": "",
      "preference_group": "BATCH_AUTO_VALIDATION",
      "preference_value_data_type": "boolean",
      "is_admin_view": "TRUE",
      "tenant_id": 1
    },
    {
      "id": 39,
      "display_name": "DAILY_PERF_UPDATE_JOB",
      "preference_key": "daily_perf_update_job",
      "preference_value": "FALSE",
      "value_list": "",
      "preference_group": "DAILY_PERF_UPDATE_JOB",
      "preference_value_data_type": "boolean",
      "is_admin_view": "TRUE",
      "tenant_id": 1
    },
    {
      "id": 40,
      "display_name": "RANGE_INTERVAL_IN_MINUTES",
      "preference_key": "range_interval_in_minutes",
      "preference_value": 2,
      "value_list": "",
      "preference_group": "RANGE_INTERVAL_IN_MINUTES",
      "preference_value_data_type": "numeric",
      "is_admin_view": "TRUE",
      "tenant_id": 1
    },
    {
      "id": 41,
      "display_name": "OEE_REQUIRED",
      "preference_key": "oee_required",
      "preference_value": "FALSE",
      "value_list": "",
      "preference_group": "OEE_REQUIRED",
      "preference_value_data_type": "boolean",
      "is_admin_view": "TRUE",
      "tenant_id": 1
    },
    {
      "id": 33,
      "display_name": "CONFIGURATION_MODE",
      "preference_key": "configuration_mode",
      "preference_value": "task",
      "value_list": "",
      "preference_group": "NODE_SUBTYPE",
      "preference_value_data_type": "text",
      "is_admin_view": "TRUE",
      "tenant_id": 1
    }
  ]
  title = 'dynamic-form-poc';

  currentView = 'New'
  constructor() { }
  ngOnInit() {

  }

  // option1 = [{
  //   id: 1,
  //   itemName: 'Option 1',
  //   value: 'Option 1'
  // },
  // {
  //   id:2,
  //   itemName: 'Option 2',
  //   value: 'Option 2'
  // }]

  // option2 = [{
  //   display_name: 'Option 3',
  //   value: 'Option 3'
  // },
  // {
  //   display_name: 'Option 4',
  //   value: 'Option 4'
  // }]

  // getDependentOptions(event:any){
  //   let parentControl = this.jsonForm.controls.find(control => control.name == event.control);
  //   console.log(parentControl);

  //   let childControl = this.jsonForm.controls.find(control => control.parent == event.control);
  //   if (childControl && parentControl && parentControl.childOptions) {
  //     childControl.options = parentControl.childOptions.filter(options => { return options.parent == event.value})
  //     console.log(childControl);
  //   }
  //   // this.jsonForm.controls.push(this.newField)
  //   // this.jsonForm.controls.splice(event.index + 1, 0, this.newField)
  // }
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
