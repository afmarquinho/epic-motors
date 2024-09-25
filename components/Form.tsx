"use client";

import generateRadomCode from "@/utils/utils";
import { useForm, SubmitHandler } from "react-hook-form";
import { DataApiType, FormDataType } from "../utils/types";
import { useEffect, useState } from "react";
import axios from "axios";
import { departamentosColombia as departamentos } from "../bd/departamentos";
import { useStore } from "@/utils/store";
import Link from "next/link";
import ErrorMessage from "./ErrorMessage";

const apiUrl = "https://www.datos.gov.co/resource/xdk5-pm3f.json";

const Form = () => {
  //? VARIABLES AND GLOBAL STATES

  const setUserData = useStore((state) => state.setUserData);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormDataType>();

  //? USESTATES
  const [departamentosArray, setDepartamentosArray] = useState<
    DataApiType[] | null
  >(null);
  const [citiesArray, setCitiesArray] = useState<string[]>([]);

  //? FUNCTIONS
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!departamentosArray) {
      return;
    }
    const filteredCities = departamentosArray
      .filter((item) => item.departamento === e.target.value)
      .map((item) => item.municipio);
    setCitiesArray(filteredCities);
  };

  const onSubmit: SubmitHandler<FormDataType> = (data) => {
    const code = generateRadomCode(8);
    const user = {
      ...data,
      code,
    };
    setUserData(user);
    window.location.href = `/${code}-${data.id}-${data.name}-${data.lastName}`;
    reset();
  };

  useEffect(() => {
    const fetchGetDepartments = async () => {
      try {
        const response = await axios.get(apiUrl);
        setDepartamentosArray(response.data);
        return response.data;
      } catch (error) {
        console.log(error);
      }
    };
    fetchGetDepartments();
  }, []);
  return (
    <>
      <h2
        className={`uppercase font-medium text-xl md:text-3xl lg:text-4xl text-center`}
      >
        ¡Diligencia el formulario y podrás ganar un <br />
        Epic CX30 GRAND TOURING 2.0- 2025!
      </h2>
      <form
        action=""
        className={`w-11/12 max-w-[700px] mx-auto mt-5`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <p className={`text-xs`}>
          <span className={`text-red-500 font-medium`}>*</span> Campos
          Obligatorios.
        </p>
        <p className={`text-xs`}>
          <span className={`text-red-500 font-medium`}>**</span> Ver téminos y
          condiciones del sorteo.
        </p>

        <div className={`w-full bg-white p-8 mt-5 space-y-2`}>
          {/* //? Name and last name fields*/}
          <div className={`flex flex-col md:flex-row gap-2 md:gap-4`}>
            {/* //? Name */}
            <div className={`flex flex-col w-full md:w-1/2`}>
              <label htmlFor="">
                Nombre <span className={`text-red-500`}>*</span>
              </label>
              <input
                type="text"
                className={`outline-none focus:outline-none border border-gray-400 p-1 rounded-md`}
                {...register("name", {
                  required: "Nombre es obligatorio",
                  validate: {
                    onlyString: (value) =>
                      /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(value) ||
                      "El campo Nombre solo permite letras",
                  },
                })}
              />
              {errors.name && <ErrorMessage message={errors.name.message} />}
            </div>
            <div className={`flex flex-col w-full md:w-1/2`}>
              <label htmlFor="">
                Apellido <span className={`text-red-500`}>*</span>
              </label>
              <input
                type="text"
                className={`outline-none focus:outline-none border border-gray-400 p-1 rounded-md`}
                {...register("lastName", {
                  required: "Apellido es obligatorio",
                  validate: {
                    onlyString: (value) =>
                      /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(value) ||
                      "El campo Apellido solo permite letras",
                  },
                })}
              />
              {errors.lastName && <ErrorMessage message={errors.lastName.message} />}
            </div>
          </div>
          {/* //? ID and state fileds*/}
          <div className={`flex flex-col md:flex-row gap-2 md:gap-4`}>
            <div className={`flex flex-col w-full md:w-1/2`}>
              <label htmlFor="">
                Cédula <span className={`text-red-500`}>*</span>
              </label>
              <input
                type="number"
                className={`outline-none focus:outline-none border border-gray-400 p-1 rounded-md arrow-hidden-input-numeric`}
                {...register("id", {
                  required: "La cédula es obligatoria",
                  validate: {
                    noNegative: (value) =>
                      value >= 0 || "No se aceptan números negativos",
                    noDecimal: (value) =>
                      Number.isInteger(Number(value)) ||
                      "No se aceptan decimales",
                  },
                })}
                style={{
                  appearance: "none",
                  MozAppearance: "textfield",
                }}
              />
              {errors.id && <ErrorMessage message={errors.id.message} />}
            </div>
            <div className={`flex flex-col w-full md:w-1/2`}>
              <label htmlFor="dep">
                Departamento <span className={`text-red-500`}>*</span>
              </label>
              <select
                id=""
                className={`outline-none focus:outline-none border border-gray-400 p-1 rounded-md`}
                {...register("dep", {
                  required: "Departamento es obligatorio",
                })}
                onChange={handleChange}
              >
                <option value="">-- Seleccione --</option>
                {departamentos.map((item: string, i: number) => (
                  <option value={item} key={i}>
                    {item}
                  </option>
                ))}
              </select>
              {errors.dep && <ErrorMessage message={errors.dep.message} />}
            </div>
          </div>
          {/* //? City and phone*/}
          <div className={`flex flex-col md:flex-row gap-2 md:gap-4`}>
            <div className={`flex flex-col w-full md:w-1/2`}>
              <label htmlFor="">
                Ciudad <span className={`text-red-500`}>*</span>
              </label>

              <select
                id=""
                className={`outline-none focus:outline-none border border-gray-400 p-1 rounded-md`}
                {...register("city", {
                  required: "Ciudad es obligatorio",
                })}
              >
                <option value="">-- Seleccione --</option>
                {citiesArray.map((item: string, i: number) => (
                  <option value={item} key={i}>
                    {item}
                  </option>
                ))}
              </select>
              {errors.city && <ErrorMessage message={errors.city.message} />}
            </div>
            <div className={`flex flex-col w-full md:w-1/2`}>
              <label htmlFor="">
                Celular <span className={`text-red-500`}>*</span>
              </label>
              <input
                type="text"
                className={`outline-none focus:outline-none border border-gray-400 p-1 rounded-md`}
                {...register("phone", {
                  required: "Teléfono es obligatorio",
                  validate: {
                    onlyNumeric: (value) =>
                      /^[0-9]+$/.test(value) ||
                      "El campo celular solo permite números",
                  },
                })}
              />
              {errors.phone && <ErrorMessage message={errors.phone.message} />}
            </div>
          </div>
          {/* //? email*/}
          <div className={`flex flex-col md:flex-row gap-2 md:gap-4`}>
            <div className={`flex flex-col w-full md:w-1/2`}>
              <label htmlFor="">
                Correo electrónico <span className={`text-red-500`}>*</span>
              </label>
              <input
                type="text"
                className={`outline-none focus:outline-none border border-gray-400 p-1 rounded-md`}
                {...register("email", {
                  required: "Correo electrónico es obligatorio",
                  validate: {
                    validEmail: (value) =>
                      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                        value
                      ) || "Digite un correo válido",
                  },
                })}
              />
              {errors.email && <ErrorMessage message={errors.email.message} />}
            </div>
            <div className={`flex flex-col w-full md:w-1/2`}></div>
          </div>
          <div className={`flex gap-5`}>
            <input
              type="checkbox"
              id=""
              {...register("habeasData", {
                required: "Debes aceptar los términos de Habeas Data",
              })}
            />
            <div className={`text-xs`}>
              Autorizo el tratamiento de mis datos de acuerdo con la finalidad
              establecida en la política de protección de datos personales.{" "}
              <Link
                className={`text-blue-700 font-medium`}
                href={"/personal-data-processing-policy"}
              >
                Haga clic aquí
              </Link>
            </div>
          </div>
          {errors.habeasData && <ErrorMessage message={errors.habeasData.message} />}
          <div className={`flex w-full pt-5`}>
            <input
              type="submit"
              value="Enviar"
              className={`bg-red-500 py-2 w-full md:w-64 mx-auto hover:text-white transition-all ease-linear font-medium`}
            />
          </div>
        </div>
      </form>
    </>
  );
};
export default Form;
