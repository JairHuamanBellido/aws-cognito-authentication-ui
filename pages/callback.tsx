import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useGetUserInfo from "../src/ui/hooks/useGetUserInfo";

export default function Callback() {
  const { isSuccess } = useGetUserInfo();
  const { replace } = useRouter();

  useEffect(() => {
    if (isSuccess) {
      replace("/");
    }
  }, [isSuccess]);

  return (
    <>
      <Head>
        <title>Callback</title>
      </Head>
      <main>
        <h2>Callback</h2>
        <p>Cargando informacion</p>
      </main>
    </>
  );
}
