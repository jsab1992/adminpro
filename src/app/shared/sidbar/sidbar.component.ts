import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidbar',
  templateUrl: './sidbar.component.html',
  styles: [
  ]
})
export class SidbarComponent implements OnInit {
    menuItems: any[];
  constructor(private serviceSidebar: SidebarService ) {
    this.menuItems = serviceSidebar.menu;

    console.log(this.menuItems);
   }

  ngOnInit(): void {
  }

}
