import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { axiosInstance } from "../utils/axios.js";
function CreateMap() {
  const [name, setName] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const navigate = useNavigate();

  const onClick = async () => {
    await axiosInstance.post("/maps", { name, latitude, longitude });
    navigate("/maps", { replace: true });
  };

  return (
    <div style={{ margin: "auto", width: "1000px" }}>
      <h1>避難場所登録</h1>
      <div>
        <Link to="/">TOP</Link>
      </div>
      <div>
        <Link to="/maps">記事一覧画面</Link>
      </div>
      <h2>住所を入力してください</h2>
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ width: "500px", height: "100px" }}
      />
    </div>
    <h2>緯度を確認してください</h2>
    <div>
      <textarea
        value={latitude}
        onChange={(e) => setLatitude(e.target.value)}
        style={{ width: "500px" }}
      />
    </div>      
    <h2>緯度を確認してください</h2>
    <div>
      <textarea
        value={longitude}
        onChange={(e) => setLongitude(e.target.value)}
        style={{ width: "500px" }}
      />
    </div>     
    
    <div style={{ marginTop: "20px" }}>
       <button onClick={onClick}>記事を作成する</button>
     </div>
  </div>
  );
}

export default CreateMap;