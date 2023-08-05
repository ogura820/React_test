import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { axiosInstance } from "../utils/axios.js";

function Maps() {

  const [maps, setMaps] = useState();
  useEffect(() => {
    const f = async () => {
      const res = await axiosInstance.get("/maps");
      setMaps(res.data);
    };
  f();
}, []);

  return (
    <div style={{ margin: "auto", width: "1000px" }}>
      <h1>避難場所一覧画面</h1>
      <div>
        <Link to="/">TOP</Link>
      </div>
      <div>
        <Link to="/create">記事作成画面</Link>
      </div>
      
      <div>
        <ul>
        {maps?.map((b) => (
          <Link to={`/maps/${b.id}`} key={b.id}>
            <li>{b.name}</li>
          </Link>
        ))}
      </ul>
    </div>

    </div>
  );
}

export default Maps;