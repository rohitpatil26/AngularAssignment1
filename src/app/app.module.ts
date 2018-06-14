import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { UsersdataComponent } from './usersdata/usersdata.component';
import { UserDataService } from './usersdata/userdata.service';
import { OrderrByPipe } from './usersdata/sort.pipe';

const appRoutes: Routes = [
  {path:'', component: AppComponent },
  {path:'users-details', component: UsersdataComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UsersdataComponent,
    OrderrByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
