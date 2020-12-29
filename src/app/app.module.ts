import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParentComponent } from './components/parent/parent.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import { FirstChallangeComponent } from './pages/challange/first-challange/first-challange.component';
import { SecondChallangeComponent } from './pages/challange/second-challange/second-challange.component';
import { ThirdChallangeComponent } from './pages/challange/third-challange/third-challange.component';
import { AngularFirstComponent } from './pages/angular 8/angular-first/angular-first.component';
import { AngularSecondComponent } from './pages/angular 8/angular-second/angular-second.component';
import { AngularThirdComponent } from './pages/angular 8/angular-third/angular-third.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    NavbarComponent,
    SidebarComponent,
    HomeComponent,
    FirstChallangeComponent,
    SecondChallangeComponent,
    ThirdChallangeComponent,
    AngularFirstComponent,
    AngularSecondComponent,
    AngularThirdComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,
    MatDividerModule,
  ],
  entryComponents: [FirstChallangeComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
