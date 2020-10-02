import React, { createContext, useContext, useReducer } from 'react';

export const CursorDispatchContext = createContext();
export const CursorStateContext = createContext();

const cursorReducer = (state, action) => {
  switch (action.type) {
    case 'INACTIVE':
      return {
        ...state,
        cursorType: '',
      };
    case 'HOVERED':
      return {
        ...state,
        cursorType: 'hovered',
      };
    case 'ENLARGED':
      return {
        ...state,
        cursorType: 'enlarged',
      };
    case 'STICKY':
      return {
        ...state,
        cursorType: 'sticky',
        top: action.top,
        left: action.left,
        width: action.width,
        height: action.height,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const CursorProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cursorReducer, {
    cursorType: '',
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });
  return (
    <CursorDispatchContext.Provider value={dispatch}>
      <CursorStateContext.Provider value={state}>
        {children}
      </CursorStateContext.Provider>
    </CursorDispatchContext.Provider>
  );
};

export default CursorProvider;

export const useCursorDispatch = () => useContext(CursorDispatchContext);
export const useCursorState = () => useContext(CursorStateContext);
