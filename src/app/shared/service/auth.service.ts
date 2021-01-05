import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NgForm } from '@angular/forms';

import firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$: Observable<firebase.UserInfo>;
  signedIn$: Observable<any>;
  constructor(private afAuth: AngularFireAuth) {
    this.signedIn$ = new Observable((subscriber) => {
      this.afAuth.onAuthStateChanged(subscriber);
    });
  }

  createUser(form: NgForm) {
    return this.afAuth.createUserWithEmailAndPassword(
      form.value.email,
      form.value.password
    );
  }
  logViaGoogle() {
    return this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logViaFb() {
    return this.afAuth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider()
    );
  }
  logInUser(form: NgForm) {
    return this.afAuth.signInWithEmailAndPassword(
      form.value.email,
      form.value.password
    );
  }

  logOut() {
    return this.afAuth.signOut();
  }
}
