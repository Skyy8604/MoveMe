import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public addStationToStartPoint(label: string): void {
    this.journeyForm.controls['start'].setValue(label);
  }

  journeyForm = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

}



