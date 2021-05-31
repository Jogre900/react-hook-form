import React, { useState } from "react";
import "./style.css";
import { useForm } from "react-hook-form";

export default function Input({
  placeholder,
  type,
  register,
  registerOptions,
  getValues,
  error,
}) {
  const [focused, setFocused] = useState(false);
  const [values, setValues] = useState("");
  
  
  const setValidateError = (typeError) => {
    const localError = {
      required: "este campo es requerido",
      minLength: "debe ser minimo de 5 caracteres",
      maxLength: "maximo de 15 caracteres",
      pattern: 'rut invalido'
    };
    return localError[typeError] ? localError[typeError] : "";
  };


  
  return (
    <div className="input-wrapper">
      <input
      style={{borderColor: !error[placeholder]?.type ? 'green' : '#262626'}}
        type={type}
        name={placeholder}
        {...register(placeholder, registerOptions)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(getValues(placeholder) ? true : false)}
        
      />
      <label className={focused || getValues(placeholder) ? "focus" : ""}>{placeholder}</label>
      {
        <span className="error">
          {setValidateError(error[placeholder]?.type)}
        </span>
      }
    </div>
  );
}
