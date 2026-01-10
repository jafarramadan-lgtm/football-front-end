import Client from "../component/clientComponent";
import { Suspense } from "react";
export default async function Matches() {


  const responce = await fetch("https://football-api-h80d.onrender.com/api/scores");
  const data = await responce.json();
  
  return (
    <div className="h-11/12 bg-gray-950 flex   justify-around   gap-10 ">
       <Suspense fallback={<h1>Loading...</h1>}><Client init={data} /></Suspense>
    </div>
  );
}
