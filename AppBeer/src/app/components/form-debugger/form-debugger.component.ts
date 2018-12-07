import { Component, OnInit, Input } from '@angular/core';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';

@Component({
  selector: 'app-form-debugger',
  templateUrl: './form-debugger.component.html',
  styleUrls: ['./form-debugger.component.css']
})
export class FormDebuggerComponent implements OnInit {

  @Input() form;

  constructor() { }

  ngOnInit() {
  }

}
