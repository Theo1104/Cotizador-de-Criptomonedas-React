import {useState} from 'react'
import styled from '@emotion/styled'

const Label = styled.label`
    color: #FFF;
    display: block;
    font-family: "Lato", sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
`

const Select = styled.select`
    width: 100%;
    font-size: 18px;
    padding: 14px;
    border-radius: 10px;
    text-align: center;
`

const useSelectCoin = (label, options) => {

    const [state, setState] = useState("")

 const SelectCoin = () =>(
     <>
        <Label>{label}</Label>
        <Select
            value={state}
            onChange={event => setState(event.target.value)}
        >
            <option value="">Seleccione</option>

            {options.map(option => (
                <option
                    key={option.id}
                    value={option.id}

                >{option.name}</option>
            ))}
        </Select>
     </>
 )
 return [state ,SelectCoin]
}

export default useSelectCoin
