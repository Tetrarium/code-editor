import React, { createContext, useContext } from "react";

import { ResultState } from "@/types/types";

import { Action } from "./reducers/resultReducer";

export const ResultContext = createContext<ResultState | null>(null);
export const ResultDispatchContext = createContext<React.Dispatch<Action> | null>(null);

export function useResult() {
  return useContext(ResultContext);
}

export function useResultDispatch() {
  return useContext(ResultDispatchContext);
}