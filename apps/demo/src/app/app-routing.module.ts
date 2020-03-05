import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NerwsComponent } from './nerws/nerws.component';

const routes: Routes = [
  {
    path: 'news',
    component: NerwsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
