import axios from "axios";
export let getCats = async () => {
  try {
    let res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}glass/api/category/getall`
    );
    return res.data.data.documents;
  } catch (error: any) {
    throw new Error(error?.message);
  }
};
