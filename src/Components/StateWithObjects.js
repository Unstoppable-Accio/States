import React,{useState} from "react";

const StateWithObjects = () => {
        const [coins, setCoins] = useState({gold:0, silver:0, bronze:0})
        console.log("value of coins", coins)

     

        function increaseGold(){
            //  setCoins({gold:coins.gold+1, silver:0, bronze:0})
             setCoins({...coins, gold:coins.gold+1})
              // setState function replace the existing value of variable
        }

       

        return(
            <div>
                <h1>Gold = {coins.gold}, Silver = {coins.silver}, Bronze = {coins.bronze} </h1>
                <button onClick={increaseGold}>Increase Gold</button>
                <button  onClick={()=> setCoins({...coins, silver: coins.silver+1})}>Increase Silver</button>
                <button
                    onClick={()=> setCoins({...coins, bronze: coins.bronze+1})}
                >Increase Bronze</button>
            </div>
        )
}


export default StateWithObjects;