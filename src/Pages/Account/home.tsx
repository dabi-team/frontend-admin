import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.scss";
import logo from "../../logo.svg";
import { useAppSelector } from "../../redux/hooks";

const Account = () => {
  const user = useAppSelector((state) => state.auth.auth);
  const [state, setstate] = useState(true);
  const [sprite, setSprite] = useState("bottts");
  const logout = (e: any) => {
    e.preventDefault();
    // localStorage.clear();
    setstate(false);
    window.location.reload();
  };
  const id = "45645734538453784375";
  return (
    <div className="nav-container">
      <div className="white-card-container shadow-lg text-center ">
        <div className="grid grid-flow-row gap-4 content-center p-20 m-7">
          {state ? (
            <div>
              <img
                src={`https://avatars.dicebear.com/api/${sprite}/${id}.svg`}
                alt="Sprite"
              />
              <div className="text-5xl p-5">{user?.user.name ?? "Haider"}</div>
              <div className="text-2xl p-3">{user?.user.email}</div>
              <div className="text-2xl p-3">{user?.user.number}</div>
              <div>
                <button onClick={logout}>logout</button>
              </div>
            </div>
          ) : (
            <div className="text-2xl">Please SignIn</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Account;
