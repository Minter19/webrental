import nookies from "nookies";
import jwt from 'jsonwebtoken'
import { Cabin_Sketch } from "next/font/google";
export default function Authorization(ctx, JWT_SECRECT_KEY_STRAPI) {
  const cookies = nookies.get(ctx);

  console.log(JWT_SECRECT_KEY_STRAPI)
  if (cookies.token) {
    const isValidJWT = jwt.verify(cookies.token, JWT_SECRECT_KEY_STRAPI, (err, decoded) => {
      if (err) {
        console.log(err)
        return false;
      }
      if (decoded) {
        return true;
      }
    });
    return isValidJWT;
  } 
  return false;
  
}
