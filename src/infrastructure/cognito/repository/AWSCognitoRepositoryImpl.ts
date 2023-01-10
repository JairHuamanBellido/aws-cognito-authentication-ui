import { injectable } from "inversify";
import httpClient from "../../../core/httpClient";
import { AWSCognitoRepository } from "../abstract/AWSCognitoRepository.abstract";
import { ICognitoToken } from "../interface/ICognitoToken.interface";
import { ICognitoUser } from "../interface/ICognitoUser.interface";

@injectable()
export class AWSCognitoRepositoryImpl implements AWSCognitoRepository {
  async getToken(code: string): Promise<ICognitoToken> {
    const queryParams = new URLSearchParams({
      client_id: process.env.AWS_COGNITO_CLIENT_ID || "",
      code,
      grant_type: "authorization_code",
      redirect_uri: process.env.AWS_COGNITO_AUTH_CALLBACK_URL || "",
    }).toString();

    const headers = {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${process.env.AWS_COGNITO_AUTH_BASIC_CODE}`,
    };
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_AWS_COGNITO_AUTH_URL}/oauth2/token?` + queryParams,
      { method: "post", headers }
    ).then((res) => res.json());

    return await res;
  }

  async getUserInfo(): Promise<ICognitoUser> {
    const response = await httpClient.get<ICognitoUser>("/oauth2/userInfo");
    localStorage.setItem("user_id", response.data.username)
    return response.data;
  }
}
