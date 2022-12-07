import { Component, OnInit } from '@angular/core';
import { ProfileInterface } from '../../interfaces/profile-interface';
import { FStorageService } from '../../services/f-storage.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  public profileImagesUrl: ProfileInterface = {
    backgroundPhotoLink: '',
    profilePhotoLink: '',
  };
  constructor(private _fStorageService: FStorageService){}

  ngOnInit(): void{
    this._fStorageService.getProfileImages()
    .then(
      (obj) => this.profileImagesUrl = obj
    )
  }
}
