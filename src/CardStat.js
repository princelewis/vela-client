import React, {useState} from "react";
import styled from "styled-components";
import axios from "axios"

export default function CardStat() {
  const [start, setStart] = useState("");
  const [limit, setLimit] = useState("");
  const [data, setData] = useState("");

  const handleChangeStart = (e) =>{
      setStart(e.target.value);
  }
  const handleChangeLimit = (e) =>{
    setLimit(e.target.value);
}

const handleSubmit = async () => {
  try{
    const statResponse = await axios.get(`https://card-verification.herokuapp.com/card-scheme/stats?start=${start}&limit=${limit}`);
    const{data} = statResponse;
    setData(data);
  }catch(e){
    alert("Request out of range, try using a lesser starting point")
  }
}

const{size, payload} = data;
console.log(payload);




  return (
    <Component>
      <h2>ANALYTICS</h2>
      <p>Checkout the statistics of all the ATM cards that have been checked on our site</p>
      <br></br>
      <br></br>

      <form>
        <label for="start">Start:</label>
        <input onChange = {handleChangeStart} type="text" placeholder="Enter start number" id="start" />
        <label for="limit">limit:</label>
        <input onChange = {handleChangeLimit} type="text" placeholder="Enter limit number" id="limit" />
        <a onClick= {handleSubmit} className="btn">Search</a>
      </form>
      <div className="stat__cover">
        <div className="top__cover">
          <div className="right__top">
            <h3>Card Numbers:</h3>
              {/* {items.map((values)=> {
              return  <span className="span">{values} occurred {payload[values]} times</span>
              })} */}

          </div>

          <div className="left__top">
            <h3>Size:</h3>
            <span className="span">{size}</span>
          </div>
        </div>
      </div>
    </Component>
  );
}

const Component = styled.div`

  h2{
    text-align: center;
    font-weight: bolder;
    font-size: 2.5rem;
    margin-bottom: 0px;
  }
  p{
    text-align: center;
    margin-top: 0px;

  }
  form {
    margin: 0px auto;
    width: 39%;
  }

  label {
    margin: 0px 15px;
    font-weight: bold;
  }
  input {
    border-radius: 5px;
  }

  a {
    background-image: linear-gradient(to top right, #251d3d, #620136);
    color: white;
    padding: 5px 17px;
    border-radius: 5px;
    margin-left: 15px;
  }

  .top__cover{
      display: flex;
      justify-content: space-between;

  }
  .bordered{
    border: 1px solid black;
  }

  .right__top{
      /* display: flex; */
      width: 50%;
      align-content: center;
      padding: 5px;
  }
  .left__top{
    width: 30%;
    padding: 5px;
    text-align: right;
  }

  .stat__cover{
    width: 39%;
    margin: 0px auto;
    margin-top: 20px;
    padding: 25px 15px;
    border-radius: 15px;
    box-shadow: 5px 8px 22px -9px #251d3d;
    background-color: white;
  }
  span{
    display: block;
  }

  @media screen and (max-width:769px){
    label {
    margin: 0px;
  }

  a {
    display: block;
    padding: 5px;
    border-radius: 5px;
    margin-top: 10px;
    margin-left: 0px;
    text-align: center;
  }

  .stat__cover{
    width: 100%;
    margin-top: 20px;
    padding: 20px 15px;
  }

  h2{
    font-size: 2.0rem;
    padding-top: 30px;
  }

  }

`;
