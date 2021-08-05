import React, { useReducer, createContext } from "react";

type PayloadType = { content: React.ReactNode; toastType: string };
type ActionType = { payload: PayloadType; type: string };

const toastReducer = (state: PayloadType[], action: ActionType) => {
  const { payload, type } = action;
  switch (type) {
    case "ADD_TOAST":
      return [...state, payload];
    // case "REMOVE_TOAST":
    //   return state.filter((toast: any) => payload.id !== toast.id);
    default:
      return [...state];
  }
};

const ToastContext = createContext<any | undefined>(undefined);

const ToastProvider = (props: any) => {
  const reducer = useReducer(toastReducer, []);
  return (
    <ToastContext.Provider value={reducer}>
      {props.children}
    </ToastContext.Provider>
  );
};

export { ToastContext, ToastProvider };
