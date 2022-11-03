import Logo from "@/components/Logo";
import { Form } from "@/components/pages/login/Form";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Login: NextPage = () => {
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
        <div className="md:p-14 min-h-[440px] md:min-h-[550px]">
          <Form />
        </div>
      </div>
    </div>
  );
};
export default Login;
