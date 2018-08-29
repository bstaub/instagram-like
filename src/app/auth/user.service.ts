import {Injectable} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {User} from '../models/user';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


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
    this.usersCollection.add(user);
  }

  deleteUser(user: User) {
    this.userDoc = this.afs.doc(`users/${user.id}`);
    this.userDoc.delete();
  }

  updateUser(user: User) {
    this.userDoc = this.afs.doc(`users/${user.id}`);
    this.userDoc.update(user);

  }
}
