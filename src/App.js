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
            <TextField id="outlined-basic" label="Principle Amount" variant="outlined" className='w-100' value={Principle}
              onChange={(e) => setPrinciple(e.target.value)} />
          </div>
          <div className=''>
            <TextField id="outlined-basic" label="Rate Of Interest (pa)%" variant="outlined" className='w-100' value={Rate}
              onChange={(e) => setRate(e.target.value)} />
          </div>
          <div className='mt-3'>
            <TextField type='number' id="outlined-basic" label="Year" variant="outlined" className='w-100' value={Year}
              onChange={(e) => setYear(e.target.value)} />
          </div>
          <div className='mt-4'>
            <Stack direction="row" spacing={2}>
              <Button type='submit' style={{ height: "50px" }} variant="contained" className='bg-success w-100'>Calculate</Button>
              <Button onClick={resetValues} type='reset' style={{ height: "50px", color: "red" }} variant="contained" className="bg-light w-100">Reset</Button>
            </Stack>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
