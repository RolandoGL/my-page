import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrl: './title-bar.component.css'
})
export class TitleBarComponent {
  @Input() public title:string = 'Title bar'
  @Input() public icon:string = 'fas fa-laptop-code'
}
