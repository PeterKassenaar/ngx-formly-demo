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
  model = {
    email: '',
    name: '',
    age: '',
    newsletter: false
  };
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
      type: 'input',
      templateOptions: {
        type: 'checkbox',
        label: 'receive newsletter?'
      }
    }
  ];

  submit(model) {
    console.log(model);
    this.msg = 'submitted';
    setTimeout(() => {
      this.msg = '';
    }, 2500);
  }
}
