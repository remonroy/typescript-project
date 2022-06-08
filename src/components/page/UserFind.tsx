import React, { useEffect, useRef, useState } from "react";
import CardItems from "./CardItems";
import "./UserFind.css";

import { useDispatch, useSelector } from "react-redux";
import { findUserAction } from "../store/action/userAction";

const UserFind = () => {
  const inputRef = useRef<any>("");

  const { users } = useSelector((state: any) => state.findUser);

  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [citysort, setCitysort] = useState("");

  const [sort, setSort] = useState("asc");

  useEffect(() => {
    dispatch(findUserAction());
  }, []);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.addEventListener("input", (e: any) => {
        if (e.target.value) {
          return;
        }
        setText("");
      });
    }
  }, []);

  // const [data, setData] = useState([]);
  // console.log("love", data);

  const handleClick = () => {
    setText(inputRef.current.value);
    // const findUsers = users && users.filter((item) => item.name === text);
  };
  const handleChangeCity = (e: any) => {
    const val = e.target.value;
    setCitysort(val);

    // const findUsers = users && users.filter((item) => item.name === text);
  };
  const handleSort = () => {
    if (sort === "asc") {
      setSort("dsc");
    } else {
      setSort("asc");
    }
  };

  return (
    <>
      <div className="container">
        <h4>curd operation Search, Sort, Filter</h4>
        <div className="ser_box">
          <input ref={inputRef} type="text" placeholder="search here name" />
          <button onClick={handleClick}>Search</button>
          {/* <button>Reset</button> */}
        </div>
        <div className="card_flex">
          {users &&
            users.length > 0 &&
            users
              .filter((item: any) =>
                text
                  ? item.name.toLowerCase() === text.toLowerCase()
                  : citysort
                  ? item.address.city === citysort
                  : item
              )
              .sort((a: any, b: any) =>
                sort === "asc" ? a.id - b.id : b.id - a.id
              )
              .map((item: any, index: any) => (
                <CardItems key={index} {...item} />
              ))}
        </div>

        <div className="sort_filter_option">
          <div>
            <h5>Filter city</h5>
            <select name="" id="" value={citysort} onChange={handleChangeCity}>
              <option value="">select city</option>
              {users &&
                users.map((item: any) => (
                  <option value={item.address.city}>{item.address.city}</option>
                ))}
            </select>
          </div>
          <div>
            <h5>sort data</h5>
            <button onClick={handleSort}>Asc</button>
            <button onClick={handleSort}>Dsc</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserFind;
