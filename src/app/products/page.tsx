import { base_url } from "@/config";
import axios from "axios";
import Link from "next/link";

const ProductPage = async () => {
  let response: any;

  try{
    response = await axios.get(`${base_url}/website/products`);

  }catch(e){
    return<>
    <div className="text-bold flex items-center justify-center">
      Sth went wrong!!
    </div>
    </>
  }
  

  return (
    <>
      All products:{""}
      <div className="flex flex-wrap items-center justify-center">
        {response.data.data.map((el: any) => (
          <>
            <Link href={"/product/${el._id}"}>
              <div className="p-2 font-semibold shadow-lg h-[400px] w-[400px] flex flex-col items-left justify-center ">
                {el.product_image} <br />
                {el.product_name}
                <br />
                <span className="text-blue-900 font-semibold">
                  {el.product_price}
                </span>{" "}
                <hr />
                <span>{el.product_description}</span>
              </div>
            </Link>
          </>
        ))}
      </div>
    </>
  );
};

export default ProductPage;
