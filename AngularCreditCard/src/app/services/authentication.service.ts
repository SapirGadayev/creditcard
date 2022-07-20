import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { authState } from 'rxfire/auth';
import { BehaviorSubject, from, switchMap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public loggedIn = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
  currentUser$ = authState(this.auth);

  constructor(private auth: Auth) { }

  login(username: string, password: string) {
    this.loggedIn.next(true);
    return from(signInWithEmailAndPassword(this.auth, username, password));
  }

  signup(name: string, email: string, password: string) {
    return from(createUserWithEmailAndPassword(this.auth, email, password)).pipe 
    (switchMap(({ user }) => updateProfile(user, { displayName: name })));
  }

  logout() {
    this.loggedIn.next(false);
    return from(this.auth.signOut());
  }
}
