import { RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import "./App.css";
import routes from "./Routes/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
export default function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 2,
        staleTime: 5 * 60 * 1000,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense
        fallback={
          <div className="flex justify-center items-center min-h-screen">
            <div className="text-xl animate-pulse">Loading...</div>
          </div>
        }
      >
        <RouterProvider router={routes} />
      </Suspense>
      <ToastContainer />
    </QueryClientProvider>
  );
}
