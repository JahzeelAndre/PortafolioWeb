import { Component, OnInit } from '@angular/core';
import { WorksDataInterface } from '../../interfaces/works-data-interface';
import { FFirestoreService } from '../../services/f-firestore.service';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent {
  worksDataObj?: WorksDataInterface;
  constructor(private _fFirestoreService: FFirestoreService){

  }

  ngOnInit(){
    this._fFirestoreService.getWorksData().subscribe(
      (dataObj) => this.worksDataObj = dataObj
    )
  }
}
