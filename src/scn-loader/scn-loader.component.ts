import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'scn-loader',
  templateUrl: './scn-loader.component.html',
  styleUrls: ['./scn-loader.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ScnLoaderComponent implements OnInit {
  @Input() theme: string = '';
  @Input() color: string = '#000';
  @Input() column: boolean = false;
  @Input() bgColor: string = 'transparent';

  constructor() {

  }

  ngOnInit() {
  }
}
