import React, {useState} from 'react'
import styled from "styled-components"
import axios from 'axios'
import CardStat from "./CardStat"



export default function App() {
  const [card, setCard] = useState('');
  const [data, setData]= useState('');

  const handleChange = (e)=>{

    // console.log(e.target.value)'
    setCard(e.target.value);

  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try{
      const response = await axios.get(`https://card-verification.herokuapp.com//card-scheme/verify/${card}`)
      setData(response.data.payload)
      console.log(response);

    }catch(e){
      console.log({e});
      alert("card details incorrect or not registered");
    }

  }
  const {bank, scheme, type} = data;
  // console.log(bank);
  return (
    <>
    <Component>

      <h1 className="cardInfoTittle">
          CARD INFO
      </h1>
        <div className="cover">

          <div className="card__cover">
              <div className="top__cover">
                <div className="left__top">
                    <h2>TYPE:</h2>
                    <span className="span">{type}</span>
                </div>
                <div className="right__top">
                    <h2>SCHEME:</h2>
                    <span className="span">{scheme}</span>
                </div>

              </div>

              <div className="center">
                  <h2>BANK:</h2>
                  <span className="span">{bank}</span>
                </div>
          </div>
          <div className="form__cover">
              <form onSubmit = {handleSubmit} >
                <label htmlFor="card-number" > Card Number</label>
                <br/><br/>
                  <input onChange={handleChange} value={card} className="card__field" type="text" id="card-number" placeholder="Enter Card Number"/>
                  <br/>
                  <button  className="buttonx" type="submit">Check</button>
              </form>
          </div>

        </div>

    </Component>
    <CardStat/>
    </>
  )
}





const Component = styled.div`
  *{
    box-sizing: border-box;
  }

  .cardInfoTittle{
    text-align: center;

  }

  .cover{
    margin: 100px auto;
    width: 40%;
    position: relative;
    padding:3px;
  }
  .bordered{
    border: 1px solid black;
  }
  .card__cover{
    padding: 25px;
    width:80%;
    color: white;
    background-image: linear-gradient(to top right, #251d3d, #620136);
    margin: 0px auto;
    border-radius: 10px;
    box-shadow: 5px 8px 22px 0.1px #251d3d;
    position: absolute;
    top: 0px;
    right: 68px;
    /* z-index: -1; */
    /* left: auto; */
  }

  .top__cover{
    display: flex;
    justify-content: space-between;

  }
  .center{
    margin-top: 50px;
  }
  .form__cover{
    padding: 180px 20px 40px 20px;
    background-color: white;
    border-radius: 15px;
    margin-top: 150px;
    box-shadow: 5px 8px 22px -9px #251d3d;

  }

  .card__field{
    width: 100%;
    height: 40px;
    border-radius: 8px;
    border: 1px solid grey;
    margin-bottom:15px;
  }

  .buttonx{
    /* margin-top: 15px; */
    font-size: 1.5em;
    margin: 0px 150px 0px 170px;
    background-color: #251d3d;
    border-radius: 8px;
    border: none;
    padding:15px 35px;
    width: 45%;
    color:white;


  }

  .span{
    font-size:1.4em;

  }

`