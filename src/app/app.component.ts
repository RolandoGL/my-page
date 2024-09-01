import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public isOpen: boolean = false

  public onOpenSideBar( value: boolean ):void{
    this.isOpen = value
  }
}
