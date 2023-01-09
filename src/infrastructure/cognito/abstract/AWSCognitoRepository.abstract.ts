import { ICognitoToken } from "../interface/ICognitoToken.interface";
import { ICognitoUser } from "../interface/ICognitoUser.interface";

export abstract class AWSCognitoRepository {
  abstract getToken(code: string): Promise<ICognitoToken>;
  abstract getUserInfo(): Promise<ICognitoUser>;
}
