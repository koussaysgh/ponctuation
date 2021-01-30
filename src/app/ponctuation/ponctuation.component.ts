import { PonctuationServiceService } from './ponctuation-service.service';
import { Component, OnInit } from '@angular/core';
import { Ponctuation } from './poctuation.model';
import {FormControl,FormGroup,Validators} from '@angular/forms';  

@Component({
  selector: 'app-ponctuation',
  templateUrl: './ponctuation.component.html',
  styleUrls: ['./ponctuation.component.css']
})
export class PonctuationComponent implements OnInit {

  poctuation ;
  constructor(private service:PonctuationServiceService) { }
number:Number=0;
  myform=new FormGroup({  
    message:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),  
     
  });  


  ngOnInit(): void {

  }

  getvalue(){
this.poctuation=new Ponctuation();
this.poctuation.id=1;
this.poctuation.ch=this.myform.get('message').value;
this.service.getNumberPonctuation(this.poctuation).subscribe((data:Number)=>
  this.number=data
  );

  }
}
