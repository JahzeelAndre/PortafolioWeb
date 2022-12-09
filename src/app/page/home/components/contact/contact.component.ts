import { Component, HostListener, OnInit } from '@angular/core';
import { ContactDataInterface } from '../../interfaces/contact-data-interface';
import { FFirestoreService } from '../../services/f-firestore.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  public contactDataObj?: ContactDataInterface;
  public screenWidth: number = 0;
  constructor(private _fFirestoreService: FFirestoreService){
  }
  ngOnInit(){
    this.screenWidth = window.innerWidth;
    this._fFirestoreService.getContactData().subscribe(
      (dataObj) => this.contactDataObj = dataObj
    )
  }

  @HostListener('window:resize', ['$event'])
  onResize($event: any){
    this.screenWidth = window.innerWidth;
  }

}
