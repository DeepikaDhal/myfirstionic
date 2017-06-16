import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SecondPage} from "../second/second";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  name: string;
  password: string;
  addcomment: string;
  student_name:string;
  student_batch:string;
  student_year:string;


  comment: any = ["xyz", "abc", "ghi"];
  students: any = [{"name": "xyz ", "batch": "2013 ", "year": "fourth"}, {"name": "abc ", "batch": "2015 ", "year": "second "},
    {"name": "lmn ", "batch": "2016 ", "year": "first "}];

  constructor(public navCtrl: NavController) {

  }

  gotosecondpage() {
    this.navCtrl.setRoot(SecondPage);
  }

  login() {
    if (this.name == "Deepika" && this.password == "1848")
      this.navCtrl.push(SecondPage, {"user": this.name})

  }

  addcomments() {
    this.comment.push(this.addcomment);
    this.addcomment = "";
  }

  delete(i) {

      this.comment.splice(i,1);
  }
  delete1(j){
     this.students.splice(j,1);
  }
addstudent(){
    this.students.push({"name":this.student_name,"batch":this.student_batch,"year":this.student_year});
  this.student_name="";
  this.student_batch="";
  this.student_year="";

  }
}


