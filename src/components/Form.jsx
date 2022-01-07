import {useState, useEffect} from 'react'
import styled from '@emotion/styled'
import Message from './Message'
import useSelectCoin from '../hooks/useSelectCoin'
import {coins} from "../data/coins.js"

const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top: 30px;

    &:hover{
        background-color: #7A7DFE;
        cursor: pointer;
    }
`

const Form = ({setCoins}) => {

    const [criptos, setCriptos] = useState([])
    const [error, setError] = useState(false)
    
    const [coin, SelectCoin] = useSelectCoin("Elige tu moneda", coins)
    const [cryptocurrency, SelectCryptoCurrency] = useSelectCoin("Elige tu CriptoMoneda", criptos)
    
    useEffect(() => {
       const consultApi = async () =>{
           const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
           const answer = await fetch(url)
           const result = await answer.json()

           const arrayCriptos = result.Data.map(cripto => {
               const obj = {
                   id: cripto.CoinInfo.Name, 
                   name: cripto.CoinInfo.FullName
               }
               return obj
           })

           setCriptos(arrayCriptos)

        }

        consultApi()

    }, [])

    const handleSubmit = (event) =>{
        event.preventDefault()
        
        if([coin, cryptocurrency].includes("")){
            setError(true)

            return
        }
        setError(false)
        setCoins({coin, cryptocurrency})

    }

    return (

        <>
            {error && <Message>Todos los campos son obligatorios</Message>}

            <form
            onSubmit={handleSubmit}
            >

                <SelectCoin/>
                <SelectCryptoCurrency/>

                <InputSubmit 
                type="submit" 
                value="Cotizar"
                />
                
            </form>
        </>
    )
}

export default Form
