import { persist } from "zustand/middleware";
import { shallow } from "zustand/shallow";
import { createWithEqualityFn } from "zustand/traditional";

interface HangyAdminStore {
  access_token?: string;
  refresh_token?: string;
  setToken(v: string | undefined): void;

  // reset(): void;
  resetToken(): void;
}

// const initialState = {
//   welcomePopup: true,
//   isSelectedAllCart: false,
//   selectedItemCarts: [],
//   totalPaymentCarts: 0,
// };

const useStoreAdmin = createWithEqualityFn<HangyAdminStore>()(
  persist(
    (set) => ({
      // ...initialState,
      isOpenMenu: false,
      setToken(v) {
        set({ access_token: v });
      },
      resetToken: () => {
        set({ access_token: "", refresh_token: "" });
      },
    }),
    {
      name: "hangy-admin-store",
      partialize: (state) => ({
        access_token: state.access_token,
        refresh_token: state.refresh_token,
      }),
    }
  ),
  shallow
);

export default useStoreAdmin;
