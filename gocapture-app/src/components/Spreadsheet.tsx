"use client";

import React, { useCallback, useRef } from 'react';
import { FixedSizeGrid as Grid, GridChildComponentProps } from 'react-window';
import RowNumber from './RowNumber';
import ColumnHeader from './ColumnHeader';
import Cell from './Cell';

export const CELL_WIDTH = 100;
export const CELL_HEIGHT = 35;
export const GRID_HEIGHT = 500;
export const GRID_WIDTH = 2000;


const Spreadsheet: React.FC = () => {
  const gridRef = useRef<Grid>(null);
  const rowHeaderRef = useRef<Grid>(null);
  const colHeaderRef = useRef<Grid>(null);

  const onScroll = useCallback(({ scrollLeft, scrollTop }: { scrollLeft: number, scrollTop: number }) => {
    if (rowHeaderRef.current) rowHeaderRef.current.scrollTo({ scrollTop });
    if (colHeaderRef.current) colHeaderRef.current.scrollTo({ scrollLeft });
  }, []);

  return (
    <div className="relative overflow-auto">

      <div style={{ position: 'sticky', top: 0, zIndex: 10, display: 'flex' }}>
        <div style={{ width: CELL_WIDTH ,padding:3,textAlign:'center'}} />
        <Grid
          ref={colHeaderRef}
          columnCount={1000}
          columnWidth={CELL_WIDTH}
          height={CELL_HEIGHT}
          rowCount={1}
          rowHeight={CELL_HEIGHT}
          width={GRID_WIDTH}
          style={{ overflow: 'hidden', position:'relative',left:38 }}
        >
          {ColumnHeader}
        </Grid>
      </div>

      <div style={{ display: 'flex' }}>
        {/* Row Numbers */}
        <div style={{ position: 'sticky', left: 0, top: CELL_HEIGHT, zIndex: 10 }}>
          <Grid
            ref={rowHeaderRef}
            columnCount={1}
            columnWidth={CELL_WIDTH}
            height={GRID_HEIGHT}
            rowCount={1000}
            rowHeight={CELL_HEIGHT}
            width={CELL_WIDTH}
            style={{ overflow: 'hidden' }}
          >
            {RowNumber}
          </Grid>
        </div>

        <Grid
          ref={gridRef}
          columnCount={1000}
          columnWidth={CELL_WIDTH}
          height={GRID_HEIGHT}
          rowCount={1000}
          rowHeight={CELL_HEIGHT}
          width={GRID_WIDTH}
          onScroll={onScroll}
        >
          {Cell}
        </Grid>
      </div>
    </div>
  );
};

export default Spreadsheet;
