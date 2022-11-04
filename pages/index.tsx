import Head from "next/head";
import Login from "./login";
import Main from "./main";

const Index = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div>
        <Main />
      </div>
    </div>
  );
};

export default Index;
