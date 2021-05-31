import React from "react";
import Input from "../input";
import "./style.css";
import { useForm } from "react-hook-form";

const registerOptions = {
  name: {
    required: true,
    minLength: 4,
    maxLength: 15,
  },
  lastName: {
    required: true,
    minLength: 4,
    maxLength: 15,
  },
  age: {
    required: true,
  },
  rut: {
    required: true,
    pattern: /^\d{1,2}\.\d{3}\.\d{3}[-][0-9kK]{1}$/,
  },
};

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log("data----", data);
  return (
    <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
      <Input
        placeholder="Name"
        type="text"
        register={register}
        registerOptions={registerOptions.name}
        getValues={getValues}
        watch={watch}
        error={errors}
      />
      <Input
        placeholder="LastName"
        type="text"
        register={register}
        registerOptions={registerOptions.lastName}
        getValues={getValues}
        error={errors}
        required
      />
      <Input
        placeholder="Age"
        type="number"
        register={register}
        getValues={getValues}
        registerOptions={registerOptions.age}
        error={errors}
      />
      <Input
        placeholder="Rut"
        type="text"
        register={register}
        registerOptions={registerOptions.rut}
        getValues={getValues}
        error={errors}
      />
      <button>Enviar</button>
    </form>
  );
}
