import { Component, HostListener, OnInit } from '@angular/core';
import { ProfileDataInterface } from '../../interfaces/profile-data-interface';
import { FFirestoreService } from '../../services/f-firestore.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  public profileDataObj?: ProfileDataInterface;
  public screenWidth: number = 0;
  constructor(private _fFirestoreService: FFirestoreService){

  }

  ngOnInit(){
    this._fFirestoreService.getProfileData().subscribe(
      (dataObj) => this.profileDataObj = dataObj,
    );
    this.screenWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.screenWidth = window.innerWidth;
  }
}
