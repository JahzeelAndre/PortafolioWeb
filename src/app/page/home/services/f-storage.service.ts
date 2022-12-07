import { Injectable } from '@angular/core';
import { Storage, ref, getDownloadURL } from '@angular/fire/storage';
import { ProfileInterface } from '../interfaces/profile-interface';

@Injectable({
  providedIn: 'root'
})
export class FStorageService {

  constructor(private _fStorageService: Storage) { }

  async getProfileImages(): Promise<ProfileInterface> {
    var profileImagesUrl: ProfileInterface = {
      profilePhotoLink: '',
      backgroundPhotoLink: '',
    };
    const refProfilePhoto = ref(this._fStorageService, 'perfil/foto/Yo.png');
    await getDownloadURL(refProfilePhoto).then((profilePhotoUrl) => profileImagesUrl.profilePhotoLink = profilePhotoUrl);
    const refProfileBackground = ref(this._fStorageService, 'perfil/foto/Fondo.png');
    await getDownloadURL(refProfileBackground).then((profileBackgroundUrl) => profileImagesUrl.backgroundPhotoLink = profileBackgroundUrl);
    return profileImagesUrl;
  }

}
