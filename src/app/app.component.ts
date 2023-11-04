import { Component,OnChanges,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Base 64 to Json Formatter';

  inputText:string = '';
  outputText:object = {};
  test:boolean = false;

  // ngDoCheck(){
  //   this.encodeDecode();
  // }

  ngOnInit(){
    this.encodeDecode();
  }
  
  inputValue(event:any){
    this.inputText = event.target.value;
    this.encodeDecode();
  }

  encodeDecode(){
    let regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
    let test = regex.test(this.inputText);
    this.outputText = test ? JSON.parse(atob(this.inputText)) : 'Unable to display in json format';
  }
}
