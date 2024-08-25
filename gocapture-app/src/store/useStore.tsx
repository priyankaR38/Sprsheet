// store/useStore.ts

import {create} from 'zustand';
import { toZeroBased, letterToColIndex } from '../utils/indexUtils';
export enum textAlignEnum{
  CENTER="center",
  START="start",
  END="end"

}
interface cellState{
  value:string;
  textAlign:textAlignEnum,
  isBold:boolean

}
interface storeState {
  cells: Record<string, cellState>;
  activeCell: string;
  updateCell: (row: number, col: string, value: string) => void;
  setActiveState: (activeState: string) => void;
  updateAlignment:(row:number,col:string,value:textAlignEnum)=>void
}

const useStore = create<storeState>((set) => ({
  cells: {},
  activeCell: "",
  updateCell: (row, col, value) =>
    set((state) => {
      const zeroBasedRow = toZeroBased(row);
      const zeroBasedCol = letterToColIndex(col);
      const key = `${zeroBasedRow}-${zeroBasedCol}`;
      const currentCell=state.cells[key]||{value:"",isBold:true,textAlign:textAlignEnum.START}
      currentCell.value=value;
      console.warn(currentCell)
      const newCells = { ...state.cells, [key]:currentCell };
      return { cells: newCells };
    }),
  setActiveState: (activeState) => set({ activeCell: activeState }),
  updateAlignment:(row,col,value)=>
    set((state)=>{
      const zeroBasedRow = toZeroBased(row);
      const zeroBasedCol = letterToColIndex(col);
      const key = `${zeroBasedRow}-${zeroBasedCol}`;
      const currentCell=state.cells[key]||{value:"",isBold:true,textAlign:textAlignEnum.CENTER}
      currentCell.textAlign=value;
      console.warn(currentCell)
      const newCells = { ...state.cells, [key]:currentCell };
      return { cells: newCells };
    })
}));

export default useStore;
