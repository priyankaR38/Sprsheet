import { fromZeroBased } from "@/utils/indexUtils";
import React from "react";
import { GridChildComponentProps } from "react-window";

const RowNumber: React.FC<GridChildComponentProps> = React.memo(({ rowIndex, style }) => {
    const rowLabel = fromZeroBased(rowIndex);
    return (
      <div style={style} className="border border-gray-300 flex items-center justify-center h-full bg-gray-200 text-black">
        {rowLabel}
      </div>
    );
  });

  export default RowNumber