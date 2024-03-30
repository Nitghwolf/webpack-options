import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import classes from "./App.module.scss";
import Logo from "@/assets/logo.png";
import Hero from "@/assets/hero.svg";

export const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount((prev) => prev + 1);

  if(__PLATFORM__ === 'mobile') {
    return <div>IS MOBILE</div>
  }

  return (
    <div data-testId={'App'}>
      <div className={classes.logo}>
        <img src={Logo} alt="Logo" />
      </div>
      <div>
        <Hero fill={'red'} style={{color: 'red'}} width={200} height={200} />
      </div>

      <h1 data-testId={'Platform'}>Platform: {__PLATFORM__}</h1>

      <Link to={"/about"}>About</Link>
      <br />
      <Link to={"/shop"}>Shop</Link>

      <h1 className={classes.value}>{count}</h1>
      <button className={classes.button} onClick={increment}>
        <span>click</span>
      </button>
      <Outlet />
    </div>
  );
};
