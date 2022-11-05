import React from "react";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./Input";

enum Field {
  ID = "id",
  PASSWORD = "password",
}

const loginSchema = z.object({
  [Field.ID]: z.string().email("Please enter a valid email."),
  [Field.PASSWORD]: z
    .string()
    .min(4, "Your password must contain between 4 and 60 characters.")
    .max(60, "Your password must contain between 4 and 60 characters."),
});

type LoginInput = z.infer<typeof loginSchema>;

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginInput> = (data) => console.log(data);

  return (
    <div className="h-full w-full flex flex-col">
      <h1 className="mb-7 text-3xl">Sign In</h1>

      <form className="flex-1" onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Email"
          error={errors[Field.ID]}
          registration={register(Field.ID)}
        />
        <Input
          type="password"
          label="Password"
          error={errors[Field.PASSWORD]}
          registration={register(Field.PASSWORD)}
        />

        <button
          className="p-4 w-full bg-red-600 rounded leading-4 mt-6 mb-3"
          type="submit"
        >
          Sign In
        </button>
      </form>

      <p className="text-neutral-400 mt-4">
        New to Netflix?{" "}
        <Link href="#" className="text-white">
          Sign up now
        </Link>
        .
      </p>
    </div>
  );
};
