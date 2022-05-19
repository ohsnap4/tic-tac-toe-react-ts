import React, { useEffect, useState } from "react";
import "./App.css";
import Square from "./components/Square";
import { Patterns } from "./Patterns";

const App = () => {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("X");
  const [result, setResult] = useState({ winner: "none", state: "none" });
  useEffect(() => {
    checkTheWin();
    checkTie();
    player == "X" ? setPlayer("O") : setPlayer("X");
  }, [board])
  useEffect(() => {
    if (result.state != 'none') {
      alert(`Game has finished! Winning player: ${result.winner} `)
    }
    restartGame()
  }, [result])
  const squareFunc = (square: string | number) => {
    setBoard(board.map((val, idx) => {
      if (idx == square && val == "") {
        return player;
      }
      return val;
    }))
  }
  const checkTheWin = () => {
    Patterns.forEach((currPattern: any) => {
      const firstPlayer = board[currPattern[0]]
      if (firstPlayer == "") return;
      let winningPattern = true
      currPattern.forEach((idx: any) => {
        if (board[idx] != firstPlayer) {
          winningPattern = false
        }
      })
      if (winningPattern) {
        setResult({ winner: player, state: "Game Finished~@!" })
      }
    })

  }
  const checkTie = () => {
    let tie = true
    board.forEach((square) => {
      if (square == "") {
        tie = false
      }
    })
    if (tie) {
      setResult({ winner: "No One Win the Match!", state: "Game is Tied!" })
    }
  }

  const restartGame = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setPlayer("X");
  }
  return (
    <>
      <div className="App">
        <div className="board">
          <div className="row">
            <Square
              val={board[0]}
              chooseSquare={() => {
                squareFunc(0);
              }}
            />
            <Square
              val={board[1]}
              chooseSquare={() => {
                squareFunc(1);
              }}
            />
            <Square
              val={board[2]}
              chooseSquare={() => {
                squareFunc(2);
              }}
            />
          </div>
          <div className="row">
            <Square
              val={board[3]}
              chooseSquare={() => {
                squareFunc(3);
              }}
            />
            <Square
              val={board[4]}
              chooseSquare={() => {
                squareFunc(4);
              }}
            />
            <Square
              val={board[5]}
              chooseSquare={() => {
                squareFunc(5);
              }}
            />
          </div>
          <div className="row">
            <Square
              val={board[6]}
              chooseSquare={() => {
                squareFunc(6);
              }}
            />
            <Square
              val={board[7]}
              chooseSquare={() => {
                squareFunc(7);
              }}
            />
            <Square
              val={board[8]}
              chooseSquare={() => {
                squareFunc(8);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
