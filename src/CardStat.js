import React from "react";
import styled from "styled-components";

export default function CardStat() {
  return (
    <Component>
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
            <h3>Start:</h3>
            <span className="span">1</span>
          </div>

          <div className="right__top">
            <h3>limit:</h3>
            <span className="span">2</span>
          </div>
        </div>
      </div>
    </Component>
  );
}

const Component = styled.div`
  form {
    margin: 0px auto;
  }

  text-align: center;
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

  .right__top{
      display: flex;
      align-content: center;
  }
`;
