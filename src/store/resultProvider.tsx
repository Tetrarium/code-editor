import { FC, PropsWithChildren, useReducer } from "react";

import { initialResult, resultReducer } from "./reducers/resultReducer";
import { ResultContext, ResultDispatchContext } from "./resultContext";

export const ResultProvider: FC<PropsWithChildren> = ({ children }) => {
  const [result, dispatch] = useReducer(
    resultReducer,
    initialResult,
  );

  return (
    <ResultContext.Provider value={result}>
      <ResultDispatchContext.Provider value={dispatch}>
        {children}
      </ResultDispatchContext.Provider>
    </ResultContext.Provider>
  );
};