export interface ICognitoUser {
  readonly sub: string;
  readonly name: string;
  readonly family_name: string;
  readonly email: string;
  readonly address: string;
  readonly email_verified: string;
  readonly username: string;
}
