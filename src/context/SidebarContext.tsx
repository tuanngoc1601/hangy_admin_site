import React, { useState, useMemo, PropsWithChildren } from "react";

// create context
export const SidebarContext = React.createContext({
  isSidebarOpen: false,
  toggleSidebar: () => console.log(1),
  closeSidebar: () => console.log(1),
});

export const SidebarProvider = ({ children }: PropsWithChildren) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  function toggleSidebar() {
    setIsSidebarOpen(!isSidebarOpen);
  }

  function closeSidebar() {
    setIsSidebarOpen(false);
  }

  const value = useMemo(
    () => ({
      isSidebarOpen,
      toggleSidebar,
      closeSidebar,
    }),
    [isSidebarOpen]
  );

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
};
