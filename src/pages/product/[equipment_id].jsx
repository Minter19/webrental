import BaseTemplate from "@/components/template/baseTemplate";
import React from "react";
import axios from "axios";
import Image from "next/image";
import Head from "next/head";
export async function getServerSideProps(ctx) {
  const { equipment_id } = ctx.query;
  const getProduct = await axios
    .get(
      `${process.env.BASE_URL_API_STRAPI}/equipments?populate=*&filters[Equipment_ID][$eq]=${equipment_id}`
    )
    .then((res) => {
      return res.data.data;
    });

  // console.log(getProduct)

  return {
    props: { getProduct },
  };
}

export default function productname({ getProduct }) {
  return (
    <>
      <Head>
        <title>MprproRent - Product</title>
      </Head>

      <BaseTemplate>
        {getProduct[0] ? (
          <div className="hero min-h-[70vh]">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <Image
                className="rounded-full w-96 aspect-square shadow-2xl"
                width={500}
                height={500}
                alt={getProduct[0].attributes.Equipment_Name}
                src={
                  process.env.BASE_URL_STRAPI +
                  getProduct[0].attributes.Equipment_Image.data[0].attributes
                    .formats.medium.url
                }
              />
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">
                  {getProduct[0].attributes.Equipment_Name}
                </h1>
                <p className="py-6 text-justify md:text-start">
                  {getProduct[0].attributes.Equipment_Description}
                </p>
                <p>Price: {parseInt(getProduct[0].attributes.Equipment_Price).toLocaleString("ID")}</p>
                <div className="gap-4 flex">
                  <button className="btn btn-primary">Rent Now</button>
                  <button className="btn btn-primary">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center font-bold min-h-[70vh] text-center my-auto text-3xl ">
            Product tidak ditemukan!
          </div>
        )}
      </BaseTemplate>
    </>
  );
}
