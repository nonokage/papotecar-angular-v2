import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

/**
 * service qui gere les connections des utilisateurs
 */

@Injectable()
export class AuthService {

  constructor() { }

  /**
   * methodes necessaire pour l'authentification de notre application
   */

  // permet de creer un utilisateur (methode asynchrone)
  createNewUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  // connection d'un utilisateur deja exisant (methode asynchrone)
  signInUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  // deconnexion d'un utilisateur
  signOutUser() {
    firebase.auth().signOut();
  }

}
