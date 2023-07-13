import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'helloword-angular-app';
  imgUrl = "../assets/BridgeLabz New Logo.svg";
  
  ngOnInit():void {
    this.title = "Hello from Bridgelabz."
    this.imgUrl= "../assets/BridgeLabz New Logo.svg"
  }
}
