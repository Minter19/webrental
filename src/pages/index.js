import { Inter } from "next/font/google";
import { parseCookies } from "nookies";
import Authorization from "../../middlewares/authorization";
import CardFragment from "@/components/fragments/cardFragment";
import Head from "next/head";
import CardLayout from "@/components/layouts/cardLayout";
import BaseTemplate from "@/components/template/baseTemplate";

const inter = Inter({ subsets: ["latin"] });

export async function getServerSideProps(ctx) {
  const auth = Authorization(ctx, process.env.JWT_SECRECT_KEY_STRAPI);
  if (!auth) {
    return {
      redirect: {
        destination: "/auth/login",
      },
    };
  }
  
  return {
    props: {},
  };
}


export default function Home() {
  // const tena = useEffect(() => {
  //   const cookies = parseCookies();
  //   console.log({ cookies });
  // }, []);
  
  return (
    <>
      <Head>
        <title>MprproRent</title>
      </Head>

      <BaseTemplate>
        <CardLayout ENDPOINT_PRODUCT_EQUIPMENTS={process.env.BASE_URL_API_STRAPI+process.env.ENDPOINT_PRODUCT_EQUIPMENTS}>
          <CardFragment/>
        </CardLayout>
      </BaseTemplate>
    </>
  );
}
