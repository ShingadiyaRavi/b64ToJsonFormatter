import { Component, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Base 64 to Json Formatter';

  constructor() {
    window.console.log = () => { }
    window.console.error = () => { }
  }

  inputText: string = 'W3siaW5mb3JtYXRpb24iOgpbeyJuYW1lIjoiU2hpbmdhZGl5YSBSYXZpIn0seyJkZXBhcnRtZW50Ijoid2ViIiwiZGVzY3JpcHRpb24iOiJBbnkgc3VnZ2VzdGlvbiB3aWxsIGJlIGFjY2VwdGFibGUifV0KfSx7ImRhdGEiOiJudWxsIn1d';
  outputText: object = {};
  test: boolean = false;

  // ngDoCheck(){
  //   this.encodeDecode();
  // }

  ngOnInit() {
    this.encodeDecode();
  }

  inputValue(event: any) {
    if (event) {
      this.inputText = event.target.value;
      this.encodeDecode();
    }
  }

  encodeDecode() {
    let regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
    let test = regex.test(this.inputText);
    this.outputText = (test != undefined || test != '') ? JSON.parse(atob(this.inputText)) : 'Unable to display in json format';
  }
}
