import { Injectable } from '@angular/core';

import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreModule,
} from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { Car } from '../car.model';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  carCollection: AngularFirestoreCollection = this.afstore.collection('cars');;
  cars: Observable<any>;
  constructor(
    private afstore: AngularFirestore,
    private afstorage: AngularFireStorage
  ) {}

  getPosts(cid){
    return this.carCollection = this.afstore.collection('/cars',ref=>ref.where("id","==",cid));
  }
  getAll() {
    return this.carCollection = this.afstore.collection('/cars');
  }

  create(carForm) {
    return this.carCollection.add(carForm).catch((error) => console.log(error));
  }
  async upLoadImg(id, images): Promise<any> {
    if (images && images.length) {
      try {
        const task = await this.afstorage
          .ref('/images')
          .child(id)
          .put(images[0]);
        return this.afstorage.ref(`images/${id}`).getDownloadURL().toPromise();
      } catch (error) {
        console.log(error);
      }
    }
  }
}
