import Logo from "@/components/Logo";
import clsx from "clsx";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";

interface ILoginInput {
  id: string | undefined;
  password: string | undefined;
}

const Login: NextPage = () => {
  const { register, handleSubmit } = useForm<ILoginInput>();

  const onSubmit: SubmitHandler<ILoginInput> = (data) => console.log(data);

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
        <div className="md:p-14">
          <h1 className="mb-7 text-3xl">Sign In</h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="relative mb-4">
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
                Email or phone number
              </label>
            </div>

            <div className="relative mb-4">
              <input
                id="loginPassword"
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

            <button
              className="p-4 w-full bg-red-600 rounded leading-4 mt-6 mb-3"
              type="submit"
            >
              Sign In
            </button>
          </form>

          <p className="text-neutral-400 mt-24">
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
