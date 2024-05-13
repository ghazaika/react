import { useId } from "react";

const InputBox = ({
    fromLabel,
    amount,
    onAmountChange,
    toLabel,
    convertedAmt,
    onCurrencyChange,
    currOptions,
    currencySelected
}) => {
     
//console.log(currOptions)
const amountId = useId()
    return (<>
    <div>
    <label htmlFor = {amountId}>{fromLabel}</label>
    <input type="number" 
    id={amountId}
    value = {amount}
    onChange = {(e) =>onAmountChange(e.target.value)}/>

    <label>Currency</label>
    <select value = {currencySelected}
    onChange = {(e) => onCurrencyChange(e.target.value)}>
        {currOptions.map((data)=> 
            <option value = {data}>{data}</option>
        )}
        
    </select>
    </div>

    <div>
    <label htmlFor = {amountId}>{toLabel}</label>
    <input type="number" 
    id={amountId}
    value = {convertedAmt}
    readOnly
    />

    <label>Currency</label>
    <select value = {currencySelected}
    onChange = {(e) => onCurrencyChange(e.target.value)}>
        {currOptions.map((data)=> 
            <option key = {data} value = {data}>{data}</option>
        )}
        
    </select>
    </div>
    
    </>)

}

export default InputBox;