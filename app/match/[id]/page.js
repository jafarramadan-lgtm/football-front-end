export default async function match({ params }) {
  const p = await params;
  const targetid = p.id;
  console.log(p.id);
  const responce = await fetch(
    "https://football-api-h80d.onrender.com/api/scores"
  );
  const data = await responce.json();
  const e = data.Sections[0].Data.Games.filter((m) => m.ID == targetid);
  return (
    <div className="flex justify-around items-center p-10 h-10/12">
      <div className="flex flex-col gap-10">
        <img
          className="w-15 h-15 "
          src={`https://football-api-h80d.onrender.com/api/slogan/${e[0].Comps[0].ID}`}
        ></img>
        <h1 className="text-3xl text-white font-bold italic ">
          {e[0].Comps[0].Name}
        </h1>
      </div>
      <div className="flex flex-col justify-around items-center  w-4/12 h-10/12">
        <div className="flex justify-around w-2xl items-center gap=10  h-11/12">
          <p className="text-3xl text-white font-bold italic ">
            {e[0].Scrs[0] > -1 ? e[0].Scrs[0] : 0}
          </p>
          <p className="text-3xl text-white font-bold italic">|</p>
          <p className="text-3xl text-white font-bold italic ">
            {e[0].Scrs[1] > -1 ? e[0].Scrs[1] : 0}
          </p>
        </div>

        {e[0].Scrs[0] == -1 ? (
          <div className="flex flex-col justify-around items-center gap-2.5">
            <h2 className="text-3xl text-orange-500 font-bold italic">
              {e[0].STime}
            </h2>
            <h2 className="text-3xl text-white font-bold italic">
              لم تبدأ المباراة بعد{" "}
            </h2>
          </div>
        ) : (
          ""
        )}
        <p className="text-3xl text-orange-500 font-bold italic">{e[0].GTD}</p>
      </div>
      <div className="flex flex-col gap-10">
        <img
          className="w-15 h-15 "
          src={`https://football-api-h80d.onrender.com/api/slogan/${e[0].Comps[1].ID}`}
        ></img>
        <h1 className="text-3xl text-white font-bold italic ">
          {e[0].Comps[1].Name}
        </h1>
      </div>
    </div>
  );
}
