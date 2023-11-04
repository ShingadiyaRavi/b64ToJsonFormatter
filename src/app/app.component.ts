import { Component,OnChanges,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Base 64 to Json Formatter';

  inputText:string = 'ewoJImlkIjogIjAwMDEiLAoJInR5cGUiOiAiZG9udXQiLAoJIm5hbWUiOiAiQ2FrZSIsCgkicHB1IjogMC41NSwKCSJiYXR0ZXJzIjoKCQl7CgkJCSJiYXR0ZXIiOgoJCQkJWwoJCQkJCXsgImlkIjogIjEwMDEiLCAidHlwZSI6ICJSZWd1bGFyIiB9LAoJCQkJCXsgImlkIjogIjEwMDIiLCAidHlwZSI6ICJDaG9jb2xhdGUiIH0sCgkJCQkJeyAiaWQiOiAiMTAwMyIsICJ0eXBlIjogIkJsdWViZXJyeSIgfSwKCQkJCQl7ICJpZCI6ICIxMDA0IiwgInR5cGUiOiAiRGV2aWwncyBGb29kIiB9CgkJCQldCgkJfSwKCSJ0b3BwaW5nIjoKCQlbCgkJCXsgImlkIjogIjUwMDEiLCAidHlwZSI6ICJOb25lIiB9LAoJCQl7ICJpZCI6ICI1MDAyIiwgInR5cGUiOiAiR2xhemVkIiB9LAoJCQl7ICJpZCI6ICI1MDA1IiwgInR5cGUiOiAiU3VnYXIiIH0sCgkJCXsgImlkIjogIjUwMDciLCAidHlwZSI6ICJQb3dkZXJlZCBTdWdhciIgfSwKCQkJeyAiaWQiOiAiNTAwNiIsICJ0eXBlIjogIkNob2NvbGF0ZSB3aXRoIFNwcmlua2xlcyIgfSwKCQkJeyAiaWQiOiAiNTAwMyIsICJ0eXBlIjogIkNob2NvbGF0ZSIgfSwKCQkJeyAiaWQiOiAiNTAwNCIsICJ0eXBlIjogIk1hcGxlIiB9CgkJXQp9';
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
