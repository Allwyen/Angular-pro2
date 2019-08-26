import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-empsearch',
  templateUrl: './empsearch.component.html',
  styleUrls: ['./empsearch.component.css']
})
export class EmpsearchComponent implements OnInit {

  getEname='';

  onSubmit(data:NgForm)
  {
    console.log(data);
  }

  constructor() { }

  ngOnInit() {
  }

}
