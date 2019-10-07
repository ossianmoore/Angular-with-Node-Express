import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  onAddMovie(form: NgForm) {
    console.log(form.value);
    form.resetForm();
    }
    

  constructor() { }

  ngOnInit() {
  }

}


