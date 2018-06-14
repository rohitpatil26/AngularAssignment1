import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscriber } from 'rxjs/Subscriber';
import 'rxjs';
import { UserDataService } from './usersdata/userdata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isSortByName : boolean = true;
  isSortName: boolean;
  isSortScore: boolean;
  constructor(private userService:UserDataService,private route: ActivatedRoute,private router:Router){
    this.router.navigate(['users-details'],{relativeTo:this.route});
  }
  
  nameChange(name){
    this.userService.activated.next(name);
  }

  sortChange(val){
    switch(val){
      case "SortByName": 
      this.isSortByName = true;
      this.isSortName = false;
      this.isSortScore = false;
      break;
      case "SortName": 
      this.isSortByName = false;
      this.isSortName = true;
      this.isSortScore = false;
      break;
      case "SortScore": 
      this.isSortByName = false;
      this.isSortName = false;
      this.isSortScore = true;
      break;
    }
  }

  sort(name){
    this.userService.sorts.next(name);
  }
}
