import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afa: AngularFireAuth) { }

  login(user: User){
    return this.afa.auth.signInWithEmailAndPassword(user.email, user.senha);

  }

  register(user: User){
    return this.afa.auth.createUserWithEmailAndPassword(user.email, user.senha);
  }

  getAuth(){
    return this.afa.auth;

  }
  
}
