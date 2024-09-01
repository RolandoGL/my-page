import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() openSideBar = new EventEmitter<boolean>()
  @ViewChild('menuBtn') public menuBtn!: ElementRef
  public isOpen: boolean = false

  public changeValue():void{
    this.menuBtn.nativeElement.classList.add('bounceIn')
    this.isOpen = !this.isOpen
    this.openSideBar.emit( this.isOpen )
    setTimeout(() => this.menuBtn.nativeElement.classList.remove('bounceIn'), 400);

  }
}
