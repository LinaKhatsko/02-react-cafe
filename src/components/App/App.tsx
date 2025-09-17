import { useState, useEffect } from "react";
import css from "./App.module.css";
import CafeInfo from "../CafeInfo/CafeInfo";

const App = () => {
  // const [count, setCount] = useState(0)


  return (
  <div className={css.app}>
      <CafeInfo />
    </div>
  );
}

export default App;
