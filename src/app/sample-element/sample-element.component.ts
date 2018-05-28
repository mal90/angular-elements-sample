import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sample-element',
  templateUrl: './sample-element.component.html',
  styleUrls: ['./sample-element.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class SampleElementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
