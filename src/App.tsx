import { useEffect, useState } from "react";
import "./App.css";
import type { ApiResponse, ResponseData } from "./types";

function App() {
  const [data, setData] = useState<ResponseData | null>(null);

  useEffect(() => {
    const API_ENDPOINT =
      "https://api.freeapi.app/api/v1/public/cats/cat/random";

    fetch(API_ENDPOINT)
      .then((_) => _.json())
      .then((res: ApiResponse) => {
        if (res.success && res.statusCode === 200) {
          setData(res.data);
        }
      });
  }, []);

  return (
    <div className="bg-slate-200 p-4 w-max-[1000px] h-dvh">
      <h1 className="text-center text-2xl font-semibold mb-6">
        FreeAPI Random Cat
      </h1>

      <p> Data: {JSON.stringify(data)} </p>
    </div>
  );
}

export default App;
