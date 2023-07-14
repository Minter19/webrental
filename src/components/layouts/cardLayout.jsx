import axios from "axios";
import React, { useEffect, useState } from "react";
import CardFragment from "../fragments/cardFragment";

export default function CardLayout({ children, ENDPOINT_PRODUCT_EQUIPMENTS }) {
  const [data, setData] = useState(null);
  const [dataSearch, setDataSearch] = useState(null);
  const listProduct = [
    "Excavator",
    "Grader",
    "Crane",
    "Bored Pile",
    "Diesel Hammer",
    "Scraper",
    "Roller",
    "Bulldozer",
    "Dump Truck",
    "Bucket Wheel Excavator",
  ];
  function handleCategory(equipment_category) {
    axios.get(`${process.env.BASE_URL_API_STRAPI}/equipments?populate=%2A&filters%5BEquipment_Category%5D=`+equipment_category).then((res) => {
      setData(res.data.data);  
      setDataSearch(res.data.data);
      // console.log(equipment_category)
    })
  }
  
  function handleInput(e) {
    axios.get(`${process.env.BASE_URL_API_STRAPI}/equipments?populate=*&filters[Equipment_Name][$startsWithi]=`+e.target.value).then((res) => {
      setDataSearch(res.data.data);
      console.log(e)
    })
    //console.log(search)
  }
  useEffect(() => {
    axios.get(ENDPOINT_PRODUCT_EQUIPMENTS).then((res) => {
      setData(res.data.data);
      setDataSearch(res.data.data);
    });
  }, [ENDPOINT_PRODUCT_EQUIPMENTS]);

  return (
    <>
      <div className="container mx-auto flex items-center ">
        <input
          type="text"
          className="input input-bordered w-full max-w-xs my-4"
          placeholder="Search product"
          onChange={handleInput}
        ></input>
        <span className="ms-5">Filter: </span>
        <div className="dropdown dropdown-bottom">
          <label tabIndex={0} className="btn capitalize btn-ghost btn-sm m-1">
            Category
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            {listProduct.map((item) => (
              <li key={item}>
                <a onClick={()=>handleCategory(item)}>{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 grid-flow-row gap-10 mx-auto my-2">
        {dataSearch ? (
          <CardFragment dataList={dataSearch} />
        ) : (
          <p>Loading....</p>
        )}
      </div>
    </>
  );
}
