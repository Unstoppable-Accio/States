import React,{useState} from "react";


const StatesWithArray = () => {
    const [favourite, setFavourite] = useState(["Mango", "Apple", "Banana"])
    const [newFruit, setNewFruit] = useState("");

    console.log(favourite)
    console.log(newFruit)

    function addFruit(e){
         setNewFruit(e.target.value)
    }
    function addToFavourite(){
        // only add a fruit to favourite if it is not already in the list
        setFavourite([...favourite, newFruit])
        setNewFruit("")
        
    }
    
    return(
        <div>
              <input type="text" placeholder="enter favourite fruit" 
               onChange={addFruit}
               value={newFruit}
              />
              <button onClick={addToFavourite} >Add</button>
              {/* // display the list of fruits */}
        </div>
    )
}

export default StatesWithArray;