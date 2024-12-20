import { ResultState } from "@/types/types";

enum ACTIONS {
  SET = 'set',
  CLEAR = 'clear',
}

type SetMessageAction = {
  type: 'set',
  payload: ResultState,
};

type ClearMessageAction = {
  type: 'clear',
};

export type Action = SetMessageAction | ClearMessageAction;

export const initialResult: ResultState = {
  type: null,
  message: '',
};

export function resultReducer(state: ResultState, action: Action): ResultState {
  switch (action.type) {
    case ACTIONS.SET: {
      return state;
    }
    case ACTIONS.CLEAR: {
      return { type: null, message: '' };
    }
    default: {
      throw new Error(`Unknown action: ${action.type}`);
    }
  }
};