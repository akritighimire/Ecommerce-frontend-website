import { base_url } from "@/config"
import AddToCartComponent from "@/pageComponents/product/addToCartComponent";
import axios from "axios"
import Link from "next/link";

const SingleProductPage = async ({params}: any) => {

    let response: any;

    try{
        response = await axios.get(
            `${base_url}/website/products?_id=${params.id}`
        );

    }catch (e) {
        <>Sth went wrong</>
    }

    

    const product_name = response.data.data[0].product_name;





    return (
        <>
        <Link href={"/"}> {"<"} Products</Link>
        <Link href={"/"}> {"<"} Go to Checkout</Link>

        <div className="m-auto max-w-[500px">{product_name} test</div>
        <AddToCartComponent id={response.data.data[0]._id} />
       </>
    )
}

export default SingleProductPage