import React from "react";

import Zadanie1 from "./components/Zadanie1";
import Zadanie2 from "./components/Zadanie2";
import Zadanie3 from "./components/Zadanie3";
import { AuthContextProvider } from "./store/auth-context";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Zadanie1 />
      </AuthContextProvider>
      <Zadanie2 />
      <Zadanie3 />
    </div>
  );
}

export default App;
