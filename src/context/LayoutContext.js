import React from "react";

var LayoutStateContext = React.createContext();
var LayoutDispatchContext = React.createContext();

function layoutReducer(state, action) {
  switch (action.type) {
    case "SET_SIDE":
      return { ...state, ToggleSideOpen: !state.ToggleSideOpen };
    case "SET_LEFT_SIDE":
      return { ...state, ToggleLeftSideOpen: !state.ToggleLeftSideOpen };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function LayoutProvider({ children }) { /* to show info and use this up the place we use context */
  var [state, dispatch] = React.useReducer(layoutReducer, {
    ToggleSideOpen: false,
    ToggleLeftSideOpen: false
  });
  return (
    <LayoutStateContext.Provider value={state}>
      <LayoutDispatchContext.Provider value={dispatch}>
        {children}
      </LayoutDispatchContext.Provider>
    </LayoutStateContext.Provider>
  );
}

function useLayoutState() { /*show states*/
  var context = React.useContext(LayoutStateContext);
  if (context === undefined) {
    throw new Error("useLayoutState must be used within a LayoutProvider");
  }
  return context;
}

function useLayoutDispatch() { /* update states */
  var context = React.useContext(LayoutDispatchContext);
  if (context === undefined) {
    throw new Error("useLayoutDispatch must be used within a LayoutProvider");
  }
  return context;
}

export { LayoutProvider, useLayoutState, useLayoutDispatch, ToggleSide,ToggleLeftSide};

// ###########################################################
function ToggleSide(dispatch) {
  dispatch({
    type: "SET_SIDE"
  });
};
function ToggleLeftSide(dispatch) {
  dispatch({
    type: "SET_LEFT_SIDE"
  });
};

