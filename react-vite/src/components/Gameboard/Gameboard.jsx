import { useState } from "react";

const Gameboard = ({onPlayerSwitch, currentSymbol}) => {
    const initialGameData = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]
    const [data, setData] = useState(initialGameData);
    const handleChangeGame = (rowIndex, colIndex) => {
        setData((prev) => {
            const arrCopy = [...prev.map((item) => [...item])];
            arrCopy[rowIndex][colIndex] = currentSymbol;
            return arrCopy
        })
        onPlayerSwitch(rowIndex, colIndex)
    }
    
return (<>
<ol>
    {data.map((row, index) => 
       <li key = {index}>
        <ol>
            {row.map((column, colindex) => 
                <li key = {colindex}><button onClick = {() => handleChangeGame(index, colindex)}>{column}</button></li>
            )}
        </ol>
       </li>
    )}
</ol>
</>)
}

export default Gameboard;