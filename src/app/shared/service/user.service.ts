import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userCollection: AngularFirestoreCollection = this.db.collection('users');

  user;
  constructor(
    private db: AngularFirestore,
    private afAuth: AngularFireAuth,
    private authService: AuthService
  ) {}
  save(user) {
    this.db
      .doc('users/' + user.uid)
      .set({
        name: user.displayName,
        email: user.email,
        isAdmin: false,
        phone: user.phone || null,
      })
      .catch((error) => console.log(error));
  }
  reAuthenticate(){
    const   fb = firebase.auth().currentUser;
   return fb.reauthenticateWithCredential(this.user);
  }
}
