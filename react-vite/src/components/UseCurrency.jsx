import { useCallback, useState, useEffect } from "react"

const UseCurrency = (props)=> {
    const [data, setData] = useState({})
    useEffect(()=> {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024.4.26/v1/currencies/${props}.json`).
        then((res)=> res.json())
        .then((data) => {setData(data[props])})
        .catch((error)=> console.log(error))
       
        
    }, [props])
    //console.log(data)
    return data;
}

export default UseCurrency;