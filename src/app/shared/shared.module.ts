import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { SidbarComponent } from './sidbar/sidbar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [BreadcrumbsComponent, HeaderComponent, SidbarComponent],
  exports: [BreadcrumbsComponent, HeaderComponent, SidbarComponent],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
