const initialState = {
  array: [
    {
      algo: "algo",
    },
  ],
};

const insertarF = (state, payload) => {
  return {
    array: [...state.array, ...payload],
  };
};

const modificarF = (state) => {
  let localState = [...state.array];
  const index = state.array.findIndex(({ algo }) => algo === "algo");
  localState[index].nuevoAlgo = "nuevo valor!";
  return {
    array: localState,
  };
};

export default (state = initialState, action) => {
  const defaultState = state;
  const options = {
    prueba: () => state,
    insertar: () => insertarF(state, action.payload),
    modificar: () => modificarF(state, action.payload),
  };
  return options[action.type] ? options[action.type]() : defaultState;
};
