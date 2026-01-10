"use client";
import CircularProgress from "@mui/material/CircularProgress";

import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
export default function Clienthome({ init }) {
  const [data, setdata] = useState(init);
  const [last, setlast] = useState([]);

  useEffect( () => {
    
    setInterval(() => {
      axios.get("https://football-api-h80d.onrender.com/api/scores").then(function (response) {
        setdata(response.data);
      });
      setlast(() => {
        return init.Sections[0].Data.Games.filter(
          (m) => !m.Active && m.Completion === 100.0
        );
      });
    }, 20000);
  }, []);
  useEffect(() => {
    setlast(() => {
      return data?.Sections?.[0]?.Data?.Games?.filter(
        (m) => !m.Active && m.Completion === 100.0
      );
    });
  }, [data]);
// console.log(init.Sections[0].Data,"jdjdj")
  return (
    <div className="flex   justify-around   gap-10">
      <div className="mt-10">
        <h2 className="text-gray-500 font-bold text-2xl">FINISHED</h2>

        <div
          className=" flex flex-col justify-around bg-gray-600 rounded-md border-2 px-8  
      border-blue-500 shadow-lg shadow-cyan-500/50 overflow-auto
        font-bold mt-3 min-h-auto h-11/12 p-2 text-white scroll-m-0"
        >
          {last?.length === 0 ? (
            <div className="flex justify-between gap-2.5 items-center">
              <h1>Loading...</h1>
              <CircularProgress style={{ color: "red" }} />
            </div>
          ) : (
            last?.map((e) => {
              return (
                <Link
                  href={`/match/${e.ID}`}
                  key={e.ID}
                  className="flex justify-around gap-7 shadow-sm shadow-gray-950 py-2 px-3.5 rounded-md bg-gray-900 mt-2.5"
                >
                  <img
                    className="w-8 h-8 "
                    src={`http://127.0.0.1:8000/api/slogan/${e.Comps[0].ID}`}
                  ></img>
                  <h1>{e.Comps[0].Name}</h1>
                  <p>{e.Scrs[0]}</p>
                  <p>{e.Scrs[1]}</p>
                  <h1>{e.Comps[1].Name}</h1>
                  <img
                    className="w-8 h-8 "
                    src={`http://127.0.0.1:8000/api/slogan/${e.Comps[1].ID}`}
                  ></img>
                </Link>
              );
            })
          )}
        </div>
      </div>


      
    </div>
  );
}
