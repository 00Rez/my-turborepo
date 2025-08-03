"use client";

import { ModuleRegistry, ClientSideRowModelModule } from 'ag-grid-community';

ModuleRegistry.registerModules([ClientSideRowModelModule]);

import { AgGridReact } from 'ag-grid-react';

import { GridProps } from './GridCars.types';
import './GridCars.css';

export const GridCars = (props: GridProps) => {
  const { items } = props;
  return (
    <div className="ag-theme-alpine" style={{ flex: 1, height: '100%', width: '100%' }}>
      <AgGridReact
        rowData={items}
        columnDefs={[
          { field: 'make' },
          { field: 'model' },
          { field: 'price' }
        ]}
      />
    </div>
  );
};

GridCars.displayName = 'GridCars';
