import { Component, Input, OnInit } from '@angular/core';
import { BlancaImpl } from '../models/blanca-impl';


@Component({
  selector: 'app-blanca-item',
  templateUrl: './blanca-item.component.html',
  styleUrls: ['./blanca-item.component.css']
})
export class BlancaItemComponent implements OnInit {
  @Input() blanca: BlancaImpl = new BlancaImpl( " ", 0, 0,0,'',0 );
  constructor() { }

  ngOnInit(): void {
  }

}
