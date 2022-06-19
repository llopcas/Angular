import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArmaImpl } from '../../models/arma-impl';


@Component({
  selector: 'app-ar-item',
  templateUrl: './ar-item.component.html',
  styleUrls: ['./ar-item.component.css']
})
export class ArItemComponent implements OnInit {
  @Input() arma: ArmaImpl = new ArmaImpl(' ', 0, 0,0,'');
  arma$: Observable<any> = new Observable<any>();
  todosArmas: ArmaImpl[] = [];

  constructor(

) { }

  ngOnInit(): void {
  }

  public onSubmit() {


  }

}
