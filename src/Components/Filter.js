import React, {useState, useEffect } from "react";
import Axios from "axios";
// import PicSearch from "./PriceSearch";
import "./main.css";
// import data from "./testy.json";
import ImageData from "./Pics";






function Filter({menuOpen}) {
  const [search, setSearch] = useState("Hello");

  const [picID, setPicID] = useState(null);

  const [clearInput, setClearInput] = useState("");

  const [productList, setProductList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/product/get").then((response) => {
      // console.log(response.data[response.data.length-2]);
      setProductList(response.data);
    });
  }, []);

  // var collect = 1;

  const arr1 = productList.filter((item) =>
    item.ProductName.toLowerCase().includes(search.toLowerCase()) );

    

  var arr2=[];

  function Help1()
  {
    console.log(`This is the picID: ${picID}`)
  }

 
const handleSubmit = (e) => {

  e.preventDefault();
  console.log(`Submit: ${search}`)

  arr2 = productList.filter((item) =>
    item.ProductName === search)

  arr2.map((item) => 
          (setPicID(item.id),
           console.log(item.id) ))

   console.log(`This is the picID: ${picID}`); 
   
   setClearInput("")
  };

  const handleChange=(e) =>{
    setSearch(e.target.value)

    setClearInput(e.target.value);
  }
  

  return (
    <>
      {/* {search} */}

      {picID && (
        <>
          {!menuOpen && (
            <div className="galleryInvite">
              <p>Like what you see?</p>
              <button>Browse our full selection!</button>
            </div>
          )}
          
          <div className="homeCart">
            <button className="homeCartbuttonC">
              <p>Add to Cart</p>
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </button>
          </div>
        </>
      )}

      {picID === null ? (
        <p className="siteName">Aada Braids: African Hair Brading</p>
      ) : (
        <img
          className="resultPic"
          src={picID != null ? ImageData[picID - 1] : null}
        ></img>
      )}

      {picID === null ? (
        <div className="linkAndOr">
          <button className="galleryLink">
            {" "}
            Browse our Selection!
            <a href="https://htmlpreview.github.io/?https://raw.githubusercontent.com/conukogu/eComm/sec/product.html"></a>
          </button>
          <p className="OR">OR</p>
        </div>
      ) : null}

      <form className="homeSearch" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          list="data"
          className="homeInput"
          value={clearInput}
          placeholder="Search for Styles"
          onChange={(e) => handleChange(e)}
        />

        <datalist id="data">
          {arr1.map((item) => (
            <option key={item.id} value={item.ProductName}>
              {item.ProductName}
            </option>
          ))}
        </datalist>
        <input className="homeSubmit" type="submit" value="Submit"></input>
      </form>
    </>
  );
}

export default Filter;
