import Head from "next/head";
import Link from "next/link";

const Index = () => {
  return (
    <div>
      <Head>
        <title>Kirfley</title>
      </Head>

      <main>
        <div className="flex flex-row justify-evenly items-center w-full bg-red-500 h-96 p-5">
          <div>
            <h1 className="text-white text-7xl font-bold">Kirfley</h1>

            <h2 className="text-white text-4xl font-bold">
              Powering <br /> Free <br /> Speech for all
            </h2>
          </div>

          <form className="flex flex-col max-w-sm w-full bg-white p-6 shadow-lg">
            <h1 className="text-2xl font-bold">Log In</h1>

            <input
              className="my-2 border border-gray-200 py-2 px-3 outline-none transition focus:border-red-500"
              name="email"
              type="text"
              placeholder="Email"
            />
            <input
              className="my-2 border border-gray-200 py-2 px-3 outline-none transition focus:border-red-500"
              name="email"
              type="password"
              placeholder="Password"
            />

            <Link href="/log-in">
              <a className="bg-black py-2 my-2 text-center text-white transition hover:bg-gray-900 outline-none">
                Log In
              </a>
            </Link>

            <Link href="/sign-up">
              <a className="bg-black py-2 my-2 text-center text-white transition hover:bg-gray-900 outline-none">
                Sign Up
              </a>
            </Link>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Index;
