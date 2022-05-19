import React from "react";
interface SquareT {
  val: string;
  chooseSquare: React.MouseEventHandler<HTMLDivElement | null>;
}

const Square = ({ val, chooseSquare }: SquareT) => {
  return (
    <div className="square" onClick={chooseSquare}>
      {" "}
      {val}
    </div>
  );
};

export default Square;
