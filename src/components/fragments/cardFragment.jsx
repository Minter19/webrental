import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CardFragment({ dataList }) {
  // console.log(dataList)
  return (
    <>
    
      {
      dataList.map((item) => (
        <div
          className="card bg-base-100 overflow-hidden shadow-xl transition-all ease-in-out duration-500 hover:scale-105"
          key={item.attributes.Equipment_ID}
        >
          <figure>
            <Image
              width={500}
              height={500}
              className="w-full px-5"
              src={
                process.env.BASE_URL_STRAPI +
                item.attributes.Equipment_Image.data[0].attributes.formats.small
                  .url
              }
              alt={item.attributes.Equipment_Name}
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.attributes.Equipment_Name.toUpperCase()}
            </h2>
            <h3 className="text-xs font-semibold italic">{item.attributes.Equipment_Category}</h3>
            <div>
              <p className="text-xs italic badge badge-info">
                {" "}
                Rp {parseInt(
                  item.attributes.Equipment_Price
                ).toLocaleString()}{" "}
                / jam
              </p>
              <p className="text-sm text-justify">
                {item.attributes.Equipment_Description.slice(0, 100)}.....
              </p>
            </div>
            <div className="card-actions justify-end">
              <button className="badge badge-outline italic text-xs hover:bg-slate-200">
                <Link href={`/product/${item.attributes.Equipment_ID}`}> See Detail </Link>
              </button>
              <button className="badge badge-outline italic text-xs hover:bg-slate-200">
                Rent Now
              </button>
              <button className="badge badge-outline italic text-xs hover:bg-slate-200">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
