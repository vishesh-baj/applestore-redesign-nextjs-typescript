import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  categories: Category[];
};

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  // const categories = await sanityCli.fetch(query)
};

export default handler;
