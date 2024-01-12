import Header from "./Header";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function Ayrıntılar() {
  const [data, setData] = useState({ name: "" });
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/ayrıntı/${id}`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <Header />
      <div className="col-sm-8 offset-sm-2">
        <h1>Ayrıntılar</h1>
        <input
          type="text"
          className="form-control"
          defaultValue={data.name}
        />{" "}
        <br /> <br />
        <input
          type="text"
          className="form-control"
          defaultValue={data.price}
        />{" "}
        <br /> <br />
        <input
          type="text"
          className="form-control"
          defaultValue={data.description}
        />{" "}
        <br /> <br />
        <input
          type="file"
          className="form-control"
          defaultValue={data.file_path}
        />
        {" "}
        <br /> <br />
        <img
          style={{ width: 250, marginBottom: -4 }}
          src={"http://localhost:8000/" + data.file_path}
          alt="Product"
        />{" "}
        <br /> <br />
        <button> Ayrıntılar</button>
      </div>
    </div>
  );
}

export default Ayrıntılar;
