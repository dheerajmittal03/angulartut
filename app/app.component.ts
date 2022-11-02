import { Component } from '@angular/core';
import { ServiService } from './servi.service';

interface dataType{
  name:string;
  id:number;
  indian:boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angular-blogs';
  data="yrt"
  dataa:any;
  constructor(private serv:ServiService){
    //console.log(this.serv.getData)
    this.serv.getData().subscribe(data=>{
      console.warn(data)
    })
  }
  parentComponent(da: any){
    console.warn(da);
  }
  getData(){
    const data: dataType={
      name:"Dheer",
      id:33,
      indian:true
    }
  }
  
}
