import { ICognitoToken } from "../interface/ICognitoToken.interface";

export abstract class AWSCognitoRepository {
  abstract getToken(code: string): Promise<ICognitoToken>;
}
