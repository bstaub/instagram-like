export interface User {
  id?: string;
  username?: string;
  password?: string;
  email?: string;
  anonymous?: boolean;
  photoURL?: string;  // user.photoURL,
  roles?: Roles;
  registrationDate: Date;
}

export interface Roles {
  authuser?: boolean;  // optionale parameter welche evtl. noch nicht existieren mit ?
  admin?: boolean;
}