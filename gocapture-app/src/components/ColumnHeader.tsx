import { colIndexToLetter } from "@/utils/indexUtils";
import React from "react";
import { GridChildComponentProps } from "react-window";

const ColumnHeader: React.FC<GridChildComponentProps> = React.memo(({ columnIndex, style }) => {
    const columnLabel = colIndexToLetter(columnIndex);
    return (
      <div style={style} className="border border-gray-300 flex items-center justify-center h-full font-bold bg-gray-200 text-black">
        {columnLabel}
      </div>
    );
  });

  export default ColumnHeader