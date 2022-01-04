export class CreateUserDto {
  readonly name: string;
  readonly tel: string;
  readonly email: string;
  readonly password: string;
  readonly role: 'Admin' | 'User';
}
