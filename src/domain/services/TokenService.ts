import { inject, injectable } from "inversify";
import { DITokens } from "../../core/di/di-tokens";
import { AWSCognitoRepositoryImpl } from "../../infrastructure/cognito/repository/AWSCognitoRepositoryImpl";

@injectable()
export class TokenService {
  constructor(
    @inject(DITokens.AWSCognitoRepositoryImpl)
    private readonly cognitoRepository: AWSCognitoRepositoryImpl
  ) {}

  async execute(code: string) {
    const cognito = await this.cognitoRepository.getToken(code);

    return cognito;
  }
}
