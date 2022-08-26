import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'mpk-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  

  isMenuVisible = false;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  closeMenu(): void {
    this.isMenuVisible = true;
  }
}
