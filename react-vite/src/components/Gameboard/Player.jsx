import { useState } from "react";

const Player = ({name, symbol, isActive}) => {
const [initialName, setInitialName] = useState(name);
const [initialSymbol, setInitialSymbol] = useState(symbol);
let [isEdit, setEdit] = useState(false)
const handleclick = () => {
    setEdit((edit) => !edit);
}
let updatesPlayerName =  <span>{initialName}</span>
if(isEdit){
    updatesPlayerName =  <input type="text" value = {initialName} 
    onChange = {(e) => setInitialName(e.target.value)}/>
}


return(<>
<div className={isActive ?undefined : "redBG"}>
    <span>{updatesPlayerName}</span>
    <span>{initialSymbol}</span>
    <button onClick = {handleclick}>{isEdit ? "Save" : "Edit"}</button>
</div>

</>)
}

export default Player;