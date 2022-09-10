import { NativeRouter, Route, Routes } from "react-router-native";
import Home from "./src/view/Home";

export default function App() {
  return (
    <NativeRouter>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </NativeRouter>
  );
}
