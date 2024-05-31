"use client"
import {useRouter} from "next/navigation";
import Products from "./{pages}/products/page";

export default function Home() {
    const router = useRouter();
    const productPage=()=>{
        router.push('/products')
    }
  return (
   <div>
    <Products/>

   </div>
  );
}
