import React, { useState } from "react";

import useLocalStore from "./../../../Hooks/useLocalStore";

import { getMyWork } from "../../../Store/reducers/userReducers";

import Button from "../../../utils/Button";
import Search from "../Search/Search";
import WorkItems from "./WorkItems";
import Pagination from "../Pagination/Pagination";

import { pantTypeOptions, shirtTypeOptions } from "./../../../constant";

const MyWorks = () => {
  const [{ data, pageNumber }, { setData, setFilters, setPageNumber }] =
    useLocalStore(getMyWork);

  const [activeButton, setActiveButton] = useState("pant");

  if (!data) {
    return <></>;
  }

  return (
    <>
      <h3>My Works</h3>
      <Search onSearchFilter={setFilters} setPageNumber={setPageNumber} />
      <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
      <div className="myworks-buttons">
        <Button
          className={`btn ${activeButton === "pant" ? "btn-primary" : ""}`}
          onClick={() => setActiveButton("pant")}
        >
          Pants
        </Button>
        <Button
          onClick={() => setActiveButton("shirt")}
          className={`btn ${activeButton === "shirt" ? "btn-primary" : ""}`}
        >
          Shirts
        </Button>
      </div>
      <div className="container content" style={{ maxHeight: "69vh" }}>
        {activeButton === "pant" ? (
          <WorkItems
            items={data.pants}
            itemTypeOptions={pantTypeOptions}
            lineLtemType="pant"
            setMyWork={setData}
          />
        ) : (
          <WorkItems
            items={data.shirts}
            itemTypeOptions={shirtTypeOptions}
            lineLtemType="shirt"
            setMyWork={setData}
          />
        )}
      </div>
    </>
  );
};

export default MyWorks;
