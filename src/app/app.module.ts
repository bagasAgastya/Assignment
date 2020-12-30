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
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

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
import { ItemListComponent } from './pages/angular 8/angular-first/services/junior-data';
import { PlaylistComponent } from './pages/angular 8/angular-second/services/intermediate-data';
import { AddPlaylistComponent } from './pages/angular 8/angular-second/add-playlist/add-playlist.component';
import { EditPlaylistComponent } from './pages/angular 8/angular-second/edit-playlist/edit-playlist.component';
import { OrdersComponent } from './pages/angular 8/angular-third/services/advanced-data';
import { AddOrderComponent } from './pages/angular 8/angular-third/add-order/add-order.component';
import { EditOrderComponent } from './pages/angular 8/angular-third/edit-order/edit-order.component';

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
    AddPlaylistComponent,
    EditPlaylistComponent,
    AddOrderComponent,
    EditOrderComponent,
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
    MatInputModule,
    MatExpansionModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatSelectModule,
  ],
  entryComponents: [
    FirstChallangeComponent,
    AddPlaylistComponent,
    EditPlaylistComponent,
    AddOrderComponent,
    EditOrderComponent,
  ],
  providers: [ItemListComponent, PlaylistComponent, OrdersComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
