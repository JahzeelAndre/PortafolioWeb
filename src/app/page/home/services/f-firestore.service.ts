import { Injectable } from '@angular/core';
import { Firestore, collection, doc, docData, DocumentReference, CollectionReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ContactDataInterface } from '../interfaces/contact-data-interface';
import { ProfileDataInterface } from '../interfaces/profile-data-interface';
import { StudiesDataInterface } from '../interfaces/studies-data-interface';

@Injectable({
  providedIn: 'root'
})
export class FFirestoreService {

  constructor(private _fFirestoreService: Firestore) { }

  getProfileData(): Observable<ProfileDataInterface> {
    const refCollection: CollectionReference = collection(this._fFirestoreService, 'Information');
    const refDocument: DocumentReference = doc(refCollection, 'Profile');
    return docData(refDocument) as Observable<ProfileDataInterface>;
  }

  getContactData(): Observable<ContactDataInterface> {
    const refCollection: CollectionReference = collection(this._fFirestoreService, 'Information');
    const refDocument: DocumentReference = doc(refCollection, 'Contact');
    return docData(refDocument) as Observable<ContactDataInterface>;
  }

  getStudiesData(): Observable<StudiesDataInterface> {
    const refCollection: CollectionReference = collection(this._fFirestoreService, 'Information');
    const refDocument: DocumentReference = doc(refCollection, 'Studies');
    return docData(refDocument) as Observable<StudiesDataInterface>;
  }
}
