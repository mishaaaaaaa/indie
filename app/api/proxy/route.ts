// api/proxy

import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { getToken } from "next-auth/jwt";

// export const GET = async function (req: Request, res: Response) {
//   console.log(req);
//   // const token = await getToken();

//   // const response = await fetch(`${process.env.API_URL}/income`, {
//   //   method: 'GET',
//   //   headers: {
//   //     authorization: token ? `Bearer ${token.accessToken}` : '',
//   //   },
//   // });
//   return await new Promise(() => 1);
// };

export const GET = async function (req: Request, res: Response): Promise<Response> {
  // const token = await getAccessToken();

  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  return await response;
};

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   try {
//     // ... остальной код ...

//     const { method, body, query } = req;
//     const [endpoint, ...params] = query.params as string[];

//     if (method === "GET" || method === "POST") {
//       // добавлено условие для GET и POST-запросов
//       let url = `YOUR_SERVER_BASE_URL/${endpoint}`;
//       if (params.length > 0) {
//         url += `/${params.join("/")}`;
//       }

//       const axiosConfig = { method, url, data: body, headers: { "Content-Type": "application/json" } };
//       const response = await axios(axiosConfig);

//       res.status(response.status).json(response.data);
//     } else {
//       res.status(405).json({ error: "Method Not Allowed" }); // Отправляем 405 для неподдерживаемых методов
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// }

// const token = await getToken({
//   req,
//   secret: process.env.NEXTAUTH_SECRET ?? "",
// });

// console.log(token);
