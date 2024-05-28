"use client"
import {useRouter} from "next/navigation";

export default function Home() {
    const router = useRouter();
    const productPage=()=>{
        router.push('/products')
    }
  return (
   <div>
    <h1>Welcome to my page</h1>
    <button onClick={productPage}>products</button>
   </div>
  );
}
