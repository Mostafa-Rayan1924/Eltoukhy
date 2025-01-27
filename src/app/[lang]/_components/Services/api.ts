import axios from "axios";
import toast from "react-hot-toast";

export let deleteItem = async (eleType: string, id: string) => {
  let loading = true;
  let headers = {
    Authorization: `Bearer ${
      typeof localStorage !== "undefined" && localStorage.getItem("token")
    }`,
  };
  try {
    let { data } = await axios.delete(
      `${process.env.NEXT_PUBLIC_BASE_URL}glass/api/${eleType}/deleteone/${id}`,
      {
        headers: headers,
      }
    );
    loading = false;
    toast.success("deleted successfully");
    return loading;
  } catch (error: any) {
    console.log(error);
    loading = false;
    toast.error(error?.message);
    throw new Error(error?.message);
  }
};
