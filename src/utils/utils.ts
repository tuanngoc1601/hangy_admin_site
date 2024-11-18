import { jwtDecode } from "jwt-decode";

export function checkIfTokenExpired(token: string): boolean {
  // check token payload
  const tokenPayload: any = jwtDecode(token);
  // check token expiration date in payload
  const tokenExpiration = tokenPayload.exp;
  const now = new Date().getTime() / 1000; // token exp shaved off milliseconds
  // if (expiration date is greater than current date)
  return now > tokenExpiration;
}
