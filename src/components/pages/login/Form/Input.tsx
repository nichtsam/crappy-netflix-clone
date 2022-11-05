import clsx from "clsx";
import { HTMLInputTypeAttribute } from "react";
import { FieldError, UseFormRegisterReturn } from "react-hook-form";

export interface InputProp {
  label: string;
  type?: HTMLInputTypeAttribute;
  error?: FieldError;
  registration: UseFormRegisterReturn;
}

export const Input = ({ type, label, error, registration }: InputProp) => (
  <div className="mb-4">
    <div
      className={clsx("relative", {
        "after:h-2 after:border-b-amber-500 after:border-b-2 after:absolute after:bottom-0 after:left-0 after:w-full after:bg-transparent after:rounded":
          !!error,
      })}
    >
      <input
        id={registration.name}
        {...registration}
        type={type}
        placeholder=" "
        className={clsx(
          "peer rounded px-5 pt-4 h-12 w-full bg-neutral-700 focus:bg-neutral-600 outline-none"
        )}
      ></input>
      <label
        htmlFor={registration.name}
        className={clsx(
          "absolute top-1/2 -translate-y-1/2 left-5 text-neutral-400 transition-all ease-out",
          "peer-focus:translate-y-0 peer-focus:top-2 peer-focus:text-xs",
          "peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs"
        )}
      >
        {label}
      </label>
    </div>
    {error && <span className="text-xs text-amber-500">{error.message}</span>}
  </div>
);
