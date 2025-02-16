import { BrowserRouter, Routes, Route } from "react-router-dom";
import Clans from "./Pages/Clans";
import Villages from "./Pages/Villages";
import Characters from "./Pages/Characters";
import Teams from "./Pages/Teams";
import Home from "./Pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Character from "./Pages/Character";
const client = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="/villages" element={<Villages />}></Route>
          <Route path="/characters" element={<Characters />}></Route>
          <Route path="/characters/:name" element={<Character />}></Route>
          <Route path="/teams" element={<Teams />}></Route>

        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
