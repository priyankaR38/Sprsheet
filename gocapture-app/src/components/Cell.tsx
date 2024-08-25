import useStore, { textAlignEnum } from "@/store/useStore";
import { colIndexToLetter, fromZeroBased } from "@/utils/indexUtils";
import React from "react";
import { useCallback } from "react";
import { GridChildComponentProps } from "react-window";


const Cell: React.FC<GridChildComponentProps> = React.memo(({ columnIndex, rowIndex, style }) => {
    const { cells, updateCell, setActiveState } = useStore();
    const col = colIndexToLetter(columnIndex); 
    const row = fromZeroBased(rowIndex); 
  
    const key = `${rowIndex}-${columnIndex}`;
    // console.log(cells)
    const value = cells[key]?.value || '';
    const isBold = cells[key]?.isBold || false;
    const textAlign = cells[key]?.textAlign || textAlignEnum.CENTER;
  
    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      updateCell(row, col, newValue);
    }, [row, col, updateCell]);
  
    return (
      <input
        style={style}
        className={`border border-gray-300 p-1 w-full h-full text-black text-${textAlign}`}
        value={value}
        onChange={handleChange}
        onFocus={() => setActiveState(`${row}-${col}`)}
      />
    );
  });

  export default Cell