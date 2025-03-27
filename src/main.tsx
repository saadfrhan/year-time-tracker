import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./context/theme-provider.tsx";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider storageKey="vite-ui-theme">
      <HelmetProvider>
        <div className="antialiased max-w-2xl mx-auto">
          <main className="min-w-0  max-w-4xl container mx-auto flex justify-center items-center min-h-screen px-4 md:px-0">
            <App />
          </main>
        </div>
      </HelmetProvider>
    </ThemeProvider>
  </React.StrictMode>
);
