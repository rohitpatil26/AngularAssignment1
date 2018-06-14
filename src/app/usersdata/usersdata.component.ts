import { Component, OnInit } from '@angular/core';
import { UserDataService } from './userdata.service';
@Component({
  selector: 'app-usersdata',
  templateUrl: './usersdata.component.html',
  styleUrls: ['./usersdata.component.css']
})
export class UsersdataComponent implements OnInit {
  totalRows:number = 0;
  dataList: any[] = [];
  direction: number = 1;
  isDesc:boolean = true;
  column:string="login";
  constructor(private userService:UserDataService) { }

  ngOnInit(){
    this.userService.activated.subscribe((name:string)=>{
      this.userService.getListByName(name).subscribe((x)=>{
        this.dataList = [];
        this.dataList = x.json();
        this.totalRows = this.dataList.length;
      });
    });

    this.userService.getList().subscribe((x)=>{
          this.dataList = x.json();
          this.totalRows = this.dataList.length;
    });

    this.userService.sorts.subscribe((property:string)=>{
      this.sort(property);
    })
  }

// Change sort function to this: 
sort(property){
    this.isDesc = !this.isDesc; //change the direction    
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
}

}
