import React from "react";
import styled from "styled-components";

export default function CardStat() {
  return (
    <Component>
      <h2>ANALYTICS</h2>
      <p>Checkout the statistics of all the ATM cards that have been checked on our site</p>
      <br></br>
      <br></br>

      <form>
        <label for="start">Start:</label>
        <input type="text" placeholder="Enter start number" id="start" />
        <label for="limit">limit:</label>
        <input type="text" placeholder="Enter limit number" id="limit" />
        <a className="btn">Search</a>
      </form>
      <div className="stat__cover">
        <div className="top__cover">
          <div className="right__top">
            <h3>Card Numbers:</h3>
            <span className="span">565376738</span>
          </div>

          <div className="left__top">
            <h3>Size:</h3>
            <span className="span">27734894 79384883737</span>
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
`;
