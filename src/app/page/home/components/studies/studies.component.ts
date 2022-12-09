import { FFirestoreService } from './../../services/f-firestore.service';
import { Component, OnInit } from '@angular/core';
import { StudiesDataInterface } from '../../interfaces/studies-data-interface';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent {
  public studiesDataObj?: StudiesDataInterface;
  constructor(private _fFirestoreService: FFirestoreService){

  }

  ngOnInit(){
    this._fFirestoreService.getStudiesData().subscribe(
      (dataObj) => this.studiesDataObj = dataObj,
    )
  }
}
