import Clienthome from "./component/clienthome";
export default async function Home() {
  const responce = await fetch("https://football-api-h80d.onrender.com/api/scores");
  const data = await responce.json();
  const response = await fetch("https://football-api-h80d.onrender.com/api/news");
  const dataa = await response.json();
  return (
    <div className="h-10/12 bg-gray-950 flex flex-col  justify-around items-center m-6 p-4">
      <h1 className=" text-2xl text-red-600 font-bold ">
        نتائج جميع المباريات لحظة ب لحظة
      </h1>
      <div className="h-7/12 bg-gray-950 flex   justify-around   gap-10 ">

        <Clienthome init={data} />

        <div
          key={dataa?.Items?.[0]?.ID}
          className="w-4/12 rounded-md flex flex-col gap-2 border-2 border-blue-500 shadow-lg 
  h-fit mt-9   shadow-cyan-500/50 p-3"
        >
          <h1 className=" text-2xl text-red-600 font-bold ">
            {dataa.Items?.[0]?.Title}
          </h1>
          {dataa?.Items?.[0].ImageSource ? (
            <img
              src={dataa?.Items?.[0]?.ImageSource}
              className="w-5/12 h-5/12"
            ></img>
          ) : (
            <img src="1768054673697.jpg" className="w-5/12 h-5/12"></img>
          )}
          <p className="text-white font-bold">{dataa?.Items?.[0]?.Description}</p>
        </div>

      </div>
                        <img src={"1768077728096.jpg"} className="w-1/12 h-4/12 mb-6 rounded-xl"></img> 


    </div>
  );
}
