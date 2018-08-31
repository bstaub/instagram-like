import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {User} from '../models/user';
import {Observable} from 'rxjs';
import {filter, map} from 'rxjs/operators';
import AuthCredential = firebase.auth.AuthCredential;
import {loadQueryList} from '@angular/core/src/render3/instructions';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;
  userDoc: AngularFirestoreDocument<User>;

  constructor(public  afs: AngularFirestore) {
    // this.users = this.afs.collection('users').valueChanges();

    this.usersCollection = this.afs.collection('users', ref => ref.orderBy('email', 'asc'));


    this.users = this.usersCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as User;
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    );
  }

  getUsers() {
    return this.users;
  }

  addUser(user: User) {
    return this.usersCollection.add(user);  // need return for async logout call in register process!
  }

  setUser2(user: User) {
    // return this.usersCollection.set({user});
    this.afs.doc(`users/${user.id}`);
    this.userDoc.set(user);
  }
  setUser3(user: User) {
    // return this.usersCollection.set({user});
    this.afs.doc(`users/${user.id}`);
    this.userDoc.set(user);
  }

  setUserMerge(user: User) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.id}`);
    const data: User = {
      downloadUrl: 'xxx',
      area: 'luzernXXX'
    };
    return userRef.set(data, {merge: true});
  }

  getSingleUserinFireStore(uid: AuthCredential) {
    return this.afs.collection('users', ref => ref.where('id', '==', uid));
  }

  deleteUser(user: User) {
    this.userDoc = this.afs.doc(`users/${user.id}`);
    this.userDoc.delete();
  }

  updateUser(user: User) {
    this.userDoc = this.afs.doc(`users/${user.id}`);
    this.userDoc.update(user);

  }

  // LocalStorage Functions start
  setUserToLocalStorage(userFromDatabase) {
    localStorage.setItem('user', JSON.stringify(userFromDatabase));
  }

  destroyUserLocalStorage() {
    localStorage.removeItem('user');
  }

  getProfileFromLocalStorage() {
    return JSON.parse(localStorage.getItem('user')) || [];
  }

}
