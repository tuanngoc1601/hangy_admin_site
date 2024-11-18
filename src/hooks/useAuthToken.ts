import useStoreAdmin from "../utils/useStore";

export function useAuthToken() {
  const access_token = useStoreAdmin((state) => state.access_token);
  const refresh_token = useStoreAdmin((state) => state.refresh_token);
  const setToken = useStoreAdmin((state) => state.setToken);

  return { access_token, refresh_token, setToken };
}
