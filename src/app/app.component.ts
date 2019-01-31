import {Component} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  msg: string;
  form = new FormGroup({});
  // 1. Create a model for your form
  model = {
    email: '',
    name: '',
    age: '',
    newsletter: false
  };

  // 2. Define fields - these of course can come from a backend/database
  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      className: 'input-lg',
      templateOptions: {
        type: 'email',
        label: 'Email address',
        placeholder: 'Your email',
        required: true
      }
    },
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        type: 'text',
        label: 'Your name',
        placeholder: 'Your name',
        required: true
      }
    },
    {
      key: 'age',
      type: 'input',
      templateOptions: {
        type: 'number',
        label: 'Your age (min.12 - max.99)',
        placeholder: 'age',
        min: 12,
        max: 99
      }
    },
    {
      key: 'newsletter',
      type: 'checkbox',
      templateOptions: {
        type: 'checkbox',
        label: 'Receive newsletter?'
      }
    }
  ];

  // 3. Submit the form.
  submit(model) {
    console.log(model);
    // 3a. Do POST to backend here.
    this.msg = 'submitted';
    setTimeout(() => {
      this.msg = '';
    }, 2500);
  }
}
