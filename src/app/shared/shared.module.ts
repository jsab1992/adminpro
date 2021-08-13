import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { SidbarComponent } from './sidbar/sidbar.component';

@NgModule({
  declarations: [BreadcrumbsComponent, HeaderComponent, SidbarComponent],
  exports: [BreadcrumbsComponent, HeaderComponent, SidbarComponent],
  imports: [CommonModule],
})
export class SharedModule {}
