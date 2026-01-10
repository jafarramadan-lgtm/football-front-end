import Link from "next/link";
export default async function News() {
  const responce = await fetch("https://football-api-h80d.onrender.com/api/news");
  const data = await responce.json();
  const datamap = data.Items.map((e) => {
    return (
      <div key={e.ID} className="w-2/12 rounded-md flex flex-col gap-2 border-2 border-blue-500 shadow-lg 
      shadow-cyan-500/50 p-3">
    <Link href={e.Url}>    <h1 className=" text-2xl text-red-600 font-bold ">{e.Title}</h1>
        {e.ImageSource ? (
          <img src={e.ImageSource} className="w-5/12 h-5/12"></img>
        ) : (
          <img src="1768054673697.jpg" className="w-5/12 h-5/12"></img>
        )}
        <p className="text-white font-bold">{e.Description}</p></Link>
      </div>
    );
  });
  return (
    <div className="flex flex-wrap gap-3 justify-around items-center p-5">
      {datamap}
    </div>
  );
}
