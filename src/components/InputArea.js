import React from 'react'
import { Button, Input } from '@material-ui/core'
import './InputArea.css';


const InputArea = ({input,setInput,findWeather}) => {

    const functionCall = (event)=>{
        event.preventDefault()
        findWeather()
    }
  return (
    <div className='inputBox'>
        <div className='inputBox__field'>
            <h1>Google Weather App</h1>
            <p>Powered By</p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" alt='logo' />
            <form>
                <Input placeholder='Enter the city name' onChange={(event)=>setInput(event.target.value)} value={input} /><br/>
                <Button variant='contained' color='secondary' type='submit' onClick={functionCall}>Search</Button>
            </form>
        </div>
        
    </div>
  )
}

export default InputArea