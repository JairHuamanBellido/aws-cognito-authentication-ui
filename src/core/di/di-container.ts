import { Container } from "inversify";

import { AWSCognitoRepositoryImpl } from "../../infrastructure/cognito/repository/AWSCognitoRepositoryImpl";
import { DITokens } from "./di-tokens";

const DIContainer = new Container();

DIContainer.bind<AWSCognitoRepositoryImpl>(
  DITokens.AWSCognitoRepositoryImpl
).to(AWSCognitoRepositoryImpl);

export { DIContainer };
