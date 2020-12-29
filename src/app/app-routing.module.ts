import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from './components/parent/parent.component';
import { AngularFirstComponent } from './pages/angular 8/angular-first/angular-first.component';
import { AngularSecondComponent } from './pages/angular 8/angular-second/angular-second.component';
import { AngularThirdComponent } from './pages/angular 8/angular-third/angular-third.component';
import { FirstChallangeComponent } from './pages/challange/first-challange/first-challange.component';
import { SecondChallangeComponent } from './pages/challange/second-challange/second-challange.component';
import { ThirdChallangeComponent } from './pages/challange/third-challange/third-challange.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: '',
    component: ParentComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'c-first', component: FirstChallangeComponent },
      { path: 'c-second', component: SecondChallangeComponent },
      { path: 'c-third', component: ThirdChallangeComponent },
      { path: 'a-first', component: AngularFirstComponent },
      { path: 'a-second', component: AngularSecondComponent },
      { path: 'a-third', component: AngularThirdComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
