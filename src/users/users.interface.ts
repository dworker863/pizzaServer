export interface IUser {
  name: string;
  tel: string;
  email: string;
  password: string;
  role: 'Admin' | 'User';
}
