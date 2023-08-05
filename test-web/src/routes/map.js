import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { axiosInstance } from "../utils/axios.js";
import Geolonia from "./geo.js";

function Map() {
  const [map, setMap] = useState();
  const params = useParams();

  useEffect(() => {
    const f = async () => {
      const res = await axiosInstance.get(`/maps/${params.id}`);
      setMap(res.data);
    };
    f();
  }, []);

  return (
    <div style={{ margin: "auto", width: "1000px" }}>
      
      <h1>避難場所詳細画面</h1>
      <div>
        <Link to="/">TOP</Link>
      </div>
      <div>
        <Link to="/create">記事作成画面</Link>
      </div>
      <div>
        <Link to="/maps">記事一覧画面</Link>
      </div>      

      <h2>{map?.name}</h2>
     <h3>本文</h3>
     <p>{map?.latitude}</p>
     <p>{map?.longitude}</p>
           {/* Geoloniaコンポーネントをここに配置 */}
           <Geolonia />
    </div>
  );
}

export default Map;