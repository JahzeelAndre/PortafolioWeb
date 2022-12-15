import { FFirestoreService } from './../../services/f-firestore.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { StudiesDataInterface } from '../../interfaces/studies-data-interface';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.css']
})
export class StudiesComponent {
  public studiesDataObj?: StudiesDataInterface;
  public screenWidth: number = 0;
  constructor(private _fFirestoreService: FFirestoreService){

  }

  ngOnInit(){
    this._fFirestoreService.getStudiesData().subscribe(
      (dataObj) => this.studiesDataObj = dataObj,
    );
    this.screenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.screenWidth = window.innerWidth;
  }
}
