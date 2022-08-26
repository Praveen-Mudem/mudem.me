import { Component, OnInit } from '@angular/core';
const YEAR_STARTED_PROGRAMMING = 2008;
@Component({
  selector: 'mpk-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public yearsExperience: number = 0;
  constructor() { 
    
  }

  ngOnInit(): void {
    this.yearsExperience = new Date().getFullYear() - YEAR_STARTED_PROGRAMMING;
  }

}
