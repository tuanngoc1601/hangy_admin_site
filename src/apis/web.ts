import useSWRMutation from "swr/mutation";
import { fetchTyped } from "./apiv1";
import { AuthResponse } from "../types/app";

export function useAuthLogin() {
  const { trigger } = useSWRMutation(
    "/api/v1/auth/login",
    (url: string, { arg }: { arg: { email: string; password: string } }) => {
      return fetchTyped<AuthResponse>(url, {
        method: "POST",
        body: JSON.stringify(arg),
      });
    }
  );

  return { dispatch: trigger };
}
