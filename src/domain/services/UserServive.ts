import { inject, injectable } from "inversify";
import { DITokens } from "../../core/di/di-tokens";
import { AWSCognitoRepositoryImpl } from "../../infrastructure/cognito/repository/AWSCognitoRepositoryImpl";

@injectable()
export class UserService {
  constructor(
    @inject(DITokens.AWSCognitoRepositoryImpl)
    private readonly cognitoRepository: AWSCognitoRepositoryImpl
  ) {}

  async getInfo() {
    const userCognito = await this.cognitoRepository.getUserInfo();
    return userCognito;
  }
}
