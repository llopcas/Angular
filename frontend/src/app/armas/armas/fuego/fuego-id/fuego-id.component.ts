import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fuego-id',
  templateUrl: './fuego-id.component.html',
  styleUrls: ['./fuego-id.component.css']
})
export class FuegoIdComponent implements OnInit {
  public fuegoId = '';

  constructor(activateRoute: ActivatedRoute) {
  this.fuegoId = activateRoute.snapshot.params['Idfuego'];

  }
  ngOnInit(): void {
  }

}
