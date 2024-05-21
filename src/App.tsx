import { useState } from 'react';
import './App.css'



interface SquareProps {
  turn : boolean;
  grid_value: number;
  onClick: () => void;
}

// {value}: SquareProps
function Square({ turn, onClick , grid_value}: SquareProps){

  const [value, setValue] = useState("");
  
  function handleClick(){
    
    
      if(turn){
        setValue("X");
      }else{
        setValue("O");
      }
      
      onClick(); 
      
  }



  return ( <button className='square'
                onClick={handleClick}
            >
              {value}
          </button>)
}

function Board(){
  const [turn, setTurn] = useState(true)
  const [square, setSquare] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState<String | null>(null);


  function toggleTurn(index: number) {
    
    
    if(turn){
      square[index] = "X"
      setSquare(square);
    }else{
      square[index] = "O"
      setSquare(square);
    }
    
    console.log('turn', turn)
    setTurn(!turn);
    setWinner(calculateWinner(square));
    
  }

  return (
    <>
    <div>
        <p>{winner}</p>
    </div>

    <div className='board-row'>

        <Square turn = {turn} onClick={()=> toggleTurn(0)}   grid_value= {square[0]}/>
        <Square turn = {turn} onClick={()=> toggleTurn(1)}   grid_value= {square[1]}/>
        <Square turn = {turn} onClick={()=> toggleTurn(2)}   grid_value= {square[2]}/> 

    </div>
    <div className='board-row'>

        <Square turn = {turn} onClick={()=> toggleTurn(3)}  grid_value= {square[3]}/>
        <Square turn = {turn} onClick={()=> toggleTurn(4)}  grid_value= {square[4]}/>
        <Square turn = {turn} onClick={()=> toggleTurn(5)}  grid_value= {square[5]}/>
    
    </div>
    <div className='board-row'>

        <Square turn = {turn} onClick={()=> toggleTurn(6)}  grid_value= {square[6]}/>
        <Square turn = {turn} onClick={()=> toggleTurn(7)}  grid_value= {square[7]}/>
        <Square turn = {turn} onClick={()=> toggleTurn(8)}  grid_value= {square[8]}/>
    
    </div>
    </>
  )
}

function calculateWinner(squares: number[]): String | null {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
 
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return String(squares[a]);
    }
  }
  return null;
}

function App() {
  
   return <Board></Board> 

}


export default App
