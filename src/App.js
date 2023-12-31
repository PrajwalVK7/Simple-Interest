import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './App.css'
import { useState } from 'react';

function App() {
  const [Principle, setPrinciple] = useState(0)
  const [Interest, setInterest] = useState(0);
  const [Rate, setRate] = useState(0);
  const [Year, setYear] = useState(0);
  const [isPrinciple, setIsPrinciple] = useState(true)
  const [isRate, setIsRate] = useState(true)
  const [isYear, setIsYear] = useState(true)

  //logic
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(`Principle amount :${Principle}--Rate :${Rate}--Years:${Year}`)
    let result = Principle * Rate * Year / 100;
    setInterest(result)
  }
  const resetValues = () => {
    setPrinciple(0);
    setInterest(0);
    setRate(0);
    setYear(0);
  }

  const validate = (e) => {
    const { value, name } = e.target;
    console.log(name)
    //regular expression 
    if (!!value.match(/^[0-9]+(\.[0-9]+)?$/)) { // !! is used to convert result of regular expression to boolean value
      if (name === 'principle') {
        setPrinciple(value)
        setIsPrinciple(true)
      }
      else if (name === 'rate') {
        setRate(value);
        setIsRate(true)
      }
      else {
        setYear(value);
        setIsYear(true)
      }
    }
    else {
      if (name === 'principle') {
        setPrinciple(value)
        setIsPrinciple(false)
      }
      else if (name === 'rate') {
        setRate(value);
        setIsRate(false)
      }
      else {
        setYear(value);
        setIsYear(false)
      }

    }
  }
  return (
    <div className="d-flex justify-content-center align-items-center w-100  " style={{ height: "100vh" }}>
      <div style={{ width: "500px" }} className="bg-light p-5 rounded mt-5">
        <h3>
          Simple Interest App
        </h3>
        <p>CalculateYour Simple Interest Easily</p>
        <div style={{ height: "150px" }} className='mt-5 bg-warning rounded d-flex flex-column justify-content-center align-items-center w-100'>
          <h1>{'\u20B9'}{Interest}</h1>
          <p>Total Simple Interest</p>
        </div>
        <form action="" className='mt-5' onSubmit={(e) => handleSubmit(e)}>
          <div className='mb-3'>
            <TextField name='principle' id="outlined-basic" label="Principle Amount" variant="outlined" className='w-100' value={Principle}
              onChange={(e) => validate(e)} />
          </div>
          {!isPrinciple &&
            <div>
              <p className='text-danger'>Invalid Input</p>
            </div>
          }
          <div className='mb-3'>
            <TextField name='rate' id="outlined-basic" label="Rate Of Interest (pa)%" variant="outlined" className='w-100' value={Rate}
              onChange={(e) => validate(e)} />
          </div>
          {!isRate &&
            <div>
              <p className='text-danger'>Invalid Input</p>
            </div>}
          <div className='mt-3'>
            <TextField name='year' id="outlined-basic" label="Year" variant="outlined" className='w-100' value={Year}
              onChange={(e) => validate(e)} />
          </div>
          {!isYear &&
            <div>
              <p className='text-danger'>Invalid Input</p>
            </div>
          }
          <div className='mt-4'>
            <Stack direction="row" spacing={2}>
              <Button disabled={!isPrinciple || !isRate || !isYear} type='submit' style={{ height: "50px" }} variant="contained" className='bg-success w-100'>Calculate</Button>
              <Button onClick={resetValues} type='reset' style={{ height: "50px", color: "red" }} variant="contained" className="bg-light w-100">Reset</Button>
            </Stack>
          </div>
        </form>
      </div>
    </div>
  );
}
export default App;
