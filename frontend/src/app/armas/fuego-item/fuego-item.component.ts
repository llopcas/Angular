import { Component, Input, OnInit } from '@angular/core';
import { FuegoImpl } from '../models/fuego-impl';


@Component({
  selector: 'app-fuego-item',
  templateUrl: './fuego-item.component.html',
  styleUrls: ['./fuego-item.component.css']
})
export class FuegoItemComponent implements OnInit {
  @Input() fuego: FuegoImpl = new FuegoImpl( " ", 0, 0,'','', '', 0 );
  constructor() { }

  ngOnInit(): void {
  }

}
