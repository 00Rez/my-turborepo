"use client";

import { AgGridReact } from "ag-grid-react";
import {
  ModuleRegistry,
  InfiniteRowModelModule,
  ColDef,
  ICellRendererParams,
  CellStyleModule,
} from "ag-grid-community";

import { fetchItems } from "../actions";
import { cache } from "react";
import { Button } from "@repo/ui/lib/atoms/button";

const fetchItemsCached = cache(fetchItems);

ModuleRegistry.registerModules([InfiniteRowModelModule, CellStyleModule]);

export interface MoviesModel {
  title: string;
  year: number;
  cast: string[];
  genres: string[];
  href: string;
  extract: string;
}

const columnDefs: ColDef[] = [
  { field: "title" },
  { field: "year" },
  { field: "cast" },
  {
    field: "genres",
    cellRenderer: (params: ICellRendererParams<MoviesModel, string[]>) => (
      <div style={{ display: "flex", gap: "4px" }}>
        {params.value?.map((v) => (
          <Button variant="secondary" key={v}>
            {v}
          </Button>
        ))}
      </div>
    ),
    cellStyle: { display: "flex", alignItems: "center" },
  },
  { field: "href" },
  { field: "extract" },
];

export const GridTest = () => {
  return (
    <div
      className="ag-theme-alpine"
      style={{ flex: 1, height: "100%", width: "100%" }}
    >
      <AgGridReact
        rowModelType="infinite"
        datasource={{
          getRows: async (params) => {
            fetchItemsCached(params.startRow, params.endRow).then((result) => {
              params.successCallback(result.items, result.totalCount);
            });
          },
        }}
        columnDefs={columnDefs}
      />
    </div>
  );
};

GridTest.displayName = "GridTest";
