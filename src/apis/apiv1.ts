import { useNavigate } from "react-router-dom";
import { APIResponse } from "../types/app";
import { API_V1 } from "../utils/constants";
import { checkIfTokenExpired } from "../utils/utils";
import useStoreAdmin from "../utils/useStore";
import { useAuthToken } from "../hooks/useAuthToken";

export function useFetchTyped<T, K = APIResponse<T>>() {
  const { access_token, refresh_token, setToken } = useAuthToken();
  const resetToken = useStoreAdmin((state) => state.resetToken);
  const navigate = useNavigate();

  const fetchTyped = (
    input: RequestInfo | URL,
    init?: RequestInit | undefined
  ): Promise<K> => {
    let _input = input;
    if (typeof _input === "string" && !_input.startsWith("http")) {
      _input = `${API_V1 || ""}${_input}`;
    }

    if (init) {
      init.headers = {
        ...init.headers,
        "Content-Type": "application/json",
      };
    }

    if (access_token && checkIfTokenExpired(access_token)) {
      return fetch(`${API_V1 || ""}/api/v1/auth/refresh`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          refresh_token: refresh_token,
        }),
      })
        .then((resp) => resp.json())
        .then(async (data) => {
          setToken(data?.data?.access_token);
          if (init) {
            init.headers = {
              ...init.headers,
              Authorization: `Bearer ${data?.data?.access_token}`,
            };
          }

          if (refresh_token && checkIfTokenExpired(refresh_token)) {
            return fetch(`${API_V1 || ""}/api/v1/auth/logout`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${data?.data?.access_token}`,
              },
            })
              .then((resp) => resp.json())
              .then(async () => {
                resetToken();
                navigate("/auth/login");
              });
          }

          return fetch(_input, init).then(async (response) => {
            if (response.ok) {
              const body = await response.json();
              if (body.code) {
                return Promise.reject({
                  code: body.code,
                  message: body.message || "failed",
                });
              }

              return body;
            }

            try {
              const body = await response.json();
              if (body.code) {
                return Promise.reject({
                  code: body.code,
                  message: body.message || "failed",
                });
              }
            } catch (err) {
              console.debug(err);
            }

            return Promise.reject(response.statusText);
          });
        });
    }

    return fetch(_input, init).then(async (response) => {
      if (response.ok) {
        const body = await response.json();
        if (body.code) {
          return Promise.reject({
            code: body.code,
            message: body.message || "failed",
          });
        }

        return body;
      }

      try {
        const body = await response.json();
        if (body.code) {
          return Promise.reject({
            code: body.code,
            message: body.message || "failed",
          });
        }
      } catch (err) {
        console.debug(err);
      }

      return Promise.reject(response.statusText);
    });
  };

  return fetchTyped;
}

export function fetchTyped<T, K = APIResponse<T>>(
  input: RequestInfo | URL,
  init?: RequestInit | undefined
): Promise<K> {
  let _input = input;
  if (typeof _input === "string" && !_input.startsWith("http")) {
    _input = `${API_V1 || ""}${_input}`;
  }

  if (init) {
    init.headers = {
      ...init.headers,
      "Content-Type": "application/json",
    };
  }

  return fetch(_input, init).then(async (response) => {
    if (response.ok) {
      const body = await response.json();
      if (body.code) {
        return Promise.reject({
          code: body.code,
          message: body.message || "failed",
        });
      }

      return body;
    }

    try {
      const body = await response.json();
      if (body.code) {
        return Promise.reject({
          code: body.code,
          message: body.message || "failed",
        });
      }
    } catch (err) {
      console.debug(err);
    }

    return Promise.reject(response.statusText);
  });
}
