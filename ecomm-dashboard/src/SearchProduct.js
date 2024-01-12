import Header from "./Header";
import { useState } from "react";
import { Table } from "react-bootstrap";

function SearchProduct() {
    const[data,setData]=useState([])

   async function search(key)
    {
            console.warn(key);
    
    let result= await fetch("http://127.0.0.1:8000/api/search/"+key);
        result=await result.json();
        console.warn(result)
        setData(result)

    }
  return (
    <div>
      <Header />
      <h1 style={{ textAlign: "center" }}>Search Product</h1>
      <div className="col-sm-6 offset-sm-3">
      <br/>
      <input type="text" onChange={(e)=>search(e.target.value)} className="form-control" placeholder="Search Product "/>
      <br/>
      <Table>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Price</td>
            <td>Description</td>
            <td>Image</td>
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
            </tr>
          ))}
        </Table>
      </div>
    </div>
  );
}

export default SearchProduct;
