import Logo from "@/components/Logo";
import clsx from "clsx";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
  id: z.string().email("Please enter a valid email."),
  password: z
    .string()
    .min(4, "Your password must contain between 4 and 60 characters.")
    .max(60, "Your password must contain between 4 and 60 characters."),
});

type LoginInput = z.infer<typeof loginSchema>;

const Login: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginInput> = (data) => console.log(data);

  return (
    <div className="min-h-screen before:h-24 before:block after:h-60 after:block relative">
      <Head>
        <title>Netflix</title>
      </Head>

      <div className="-z-10 hidden md:block absolute-full">
        <Image
          alt="background"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/28b69a57-cadf-43d9-8a95-e5f2e11199de/8ed8f928-448a-4d40-9d78-8abf2cd885b2/TW-zh-20221010-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
      </div>

      <header className="h-24 w-40 ml-[3%] absolute top-0 left-0">
        <Logo />
      </header>

      <div className="px-[5%] md:px-0 bg-black/75 md:mx-auto md:max-w-md">
        <div className="md:p-14 min-h-[550px] flex flex-col">
          <h1 className="mb-7 text-3xl">Sign In</h1>

          <form className="flex-1" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <div
                className={clsx("relative", {
                  "after:h-2 after:border-b-amber-500 after:border-b-2 after:absolute after:bottom-0 after:left-0 after:w-full after:bg-transparent after:rounded":
                    !!errors.id,
                })}
              >
                <input
                  id="loginId"
                  {...register("id")}
                  placeholder=" "
                  className={clsx(
                    "peer rounded px-5 pt-4 h-12 w-full bg-neutral-700 focus:bg-neutral-600 outline-none"
                  )}
                ></input>
                <label
                  htmlFor="loginId"
                  className={clsx(
                    "absolute top-1/2 -translate-y-1/2 left-5 text-neutral-400 transition-all ease-out",
                    "peer-focus:translate-y-0 peer-focus:top-2 peer-focus:text-xs",
                    "peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs"
                  )}
                >
                  Email
                </label>
              </div>
              {errors.id && (
                <span className="text-xs text-amber-500">
                  {errors.id.message}
                </span>
              )}
            </div>

            <div className="mb-4">
              <div
                className={clsx("relative", {
                  "after:h-2 after:border-b-amber-500 after:border-b-2 after:absolute after:bottom-0 after:left-0 after:w-full after:bg-transparent after:rounded":
                    !!errors.id,
                })}
              >
                <input
                  id="loginPassword"
                  type="password"
                  {...register("password")}
                  placeholder=" "
                  className={clsx(
                    "peer rounded px-5 pt-4 h-12 w-full bg-neutral-700 focus:bg-neutral-600 outline-none"
                  )}
                ></input>
                <label
                  htmlFor="loginPassword"
                  className={clsx(
                    "absolute top-1/2 -translate-y-1/2 left-5 text-neutral-400 transition-all ease-out",
                    "peer-focus:translate-y-0 peer-focus:top-2 peer-focus:text-xs",
                    "peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs"
                  )}
                >
                  Password
                </label>
              </div>
              {errors.password && (
                <span className="text-xs text-amber-500">
                  {errors.password.message}
                </span>
              )}
            </div>

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
      </div>
    </div>
  );
};
export default Login;
