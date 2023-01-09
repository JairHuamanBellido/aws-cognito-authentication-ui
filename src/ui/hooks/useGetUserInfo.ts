import { useQuery } from "@tanstack/react-query";
import { DIContainer } from "../../core/di/di-container";
import { UserService } from "../../domain/services/UserServive";
import { ICognitoUser } from "../../infrastructure/cognito/interface/ICognitoUser.interface";

export default function useGetUserInfo() {
  const userService = DIContainer.resolve(UserService);
  return useQuery<ICognitoUser>(["user-info"], () => userService.getInfo());
}
