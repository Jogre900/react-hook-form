import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import store from "./store";
import { Provider, useSelector, useDispatch } from "react-redux";
import RegisterForm from "./components/registerForm";

const Prueba = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const state = useSelector((state) => state.array);
  const saludar = () => console.log("hola desde la funcion");
  const dispatch = useDispatch();
  const reduxInsert = () =>
    dispatch({
      type: "insertar",
      payload: [{ algo2: "algo2" }, { algo3: "algo3" }],
    });
  const reduxMod = () => dispatch({ type: "modificar" });
  console.log(state);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>{children({ loading, saludar, state, reduxInsert, reduxMod })}</div>
  );
};

function App() {
  return (
    <Provider store={store}>
      <div>
        <RegisterForm />
      </div>
    </Provider>
  );
}

export default App;



// <Prueba>
// {({
//   loading,
//   saludar,
//   pruebaRedux,
//   state,
//   reduxInsert,
//   reduxMod,
// }) => (
//   <>
//     <p onClick={pruebaRedux}>
//       {loading ? "Cargando.." : "Finalizo..!!"}
//     </p>
//     {/* <p>{state.map(elem => console.log(elem))}</p> */}
//     <button onClick={() => reduxInsert()}>prueba de redux</button>
//     <button onClick={() => reduxMod()}>Modificar</button>
//   </>
// )}
// </Prueba>
