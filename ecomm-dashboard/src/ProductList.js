import Header from "./Header";
import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function ProductList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function deleteOperation(id) {
    let result = await fetch("http://127.0.0.1:8000/api/delete/" + id, {
      method: "DELETE",
    });
    result = await result.json();
    console.warn(result);
    getData();
  }
  async function getData() {
    let result = await fetch("http://127.0.0.1:8000/api/list");
    result = await result.json();
    setData(result);
  }
 
  return (
    <div>
      <Header />
      <h1 style={{ textAlign: "center" }}>Product List</h1>
      <div className="col-sm-8 offset-sm-2">
        <Table>
          <tr>
            <td>Id</td>
            <td> Name </td>
            <td>Price</td>
            <td>Description</td>
            <td>Image</td>
            <td>Operations</td>
          
          </tr>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.description}</td>
              
              <td>
                <img
                  style={{ width: 100, marginBottom: -4 }}
                  src={"http://localhost:8000/" + item.file_path}
                  alt="Product"
                />
              </td>
              <td>
                {" "}
                <Button
                  variant="outline-danger"
                  onClick={() => deleteOperation(item.id)}
                  className="delete"
                >
                  Delete
                </Button>{" "}
              </td>
              <Link to={"update/" + item.id}>
                <td>
                  <Button variant="outline-warning" className="update">
                    Update
                  </Button>
                </td>
              </Link>
              <br/>
              <Link to={"update/" + item.id}>
              <td>   
              <Button variant="info">Ayrıntılar</Button>{' '}
              </td>
              </Link>
            </tr>
          ))}
        </Table>
      </div>
    </div>
  );
}
export default ProductList;
