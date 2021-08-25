import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [],
})
export class AccountSettingsComponent implements OnInit {
  public linkTheme = document.querySelector('#theme');
  
  constructor(private serviceSettings : SettingsService) {}

  ngOnInit(): void {
    this.serviceSettings.checkCurrentTheme();
  }

  changeTheme(theme: string) {
    this.serviceSettings.changeTheme(theme);
  }

}
