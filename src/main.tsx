import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { SidebarProvider } from "./context/SidebarContext.tsx";
import ThemedSuspense from "./components/ThemedSuspense.tsx";
import windmillTheme from "./windmillTheme.ts";
import { Windmill } from "@windmill/react-ui";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SidebarProvider>
      <Suspense fallback={<ThemedSuspense />}>
        <Windmill usePreferences theme={windmillTheme}>
          <App />
        </Windmill>
      </Suspense>
    </SidebarProvider>
    ,
  </StrictMode>
);
