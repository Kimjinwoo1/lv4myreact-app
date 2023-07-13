import logo from "./logo.svg";
import "./App.css";
import Router from "./shared/Router";
import { QueryClientProvider } from "react-query";
import { QueryClient } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    // 프로그램전체에서 queryClient가 사용되게 하는것
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}

export default App;
