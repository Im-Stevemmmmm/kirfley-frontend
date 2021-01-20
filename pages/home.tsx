import { PreviewPost } from "components/pages/home/PostPreview";
import Head from "next/head";
import Image from "next/image";
import { useSessionAuth } from "utils/hooks/use-session-auth/use-session-auth";

const FollowingCircle = () => {
  return (
    <figure className="rounded-full border border-blue-300 bg-white w-14 h-14 cursor-pointer"></figure>
  );
};

const Home = () => {
  // useSessionAuth();

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <main>
        <div className="flex flex-row overflow-hidden">
          <nav className="flex flex-row justify-center py-5 h-screen w-16 bg-gray-100 border border-r border-gray-200 sticky top-0 z-10">
            <h1 className="text-white font-bold text-2xl">
              <ul className="space-y-5">
                <li className="cursor-pointer">
                  <Image
                    src="/icons/paper-plane.svg"
                    alt=""
                    width={30}
                    height={30}
                  />
                </li>
              </ul>
            </h1>
          </nav>

          <div className="bg-gray-50 w-full min-h-screen p-4">
            <h1 className="font-bold text-2xl mb-3">Following</h1>

            <div className="flex flex-row space-x-2">
              <FollowingCircle />
              <FollowingCircle />
              <FollowingCircle />
              <FollowingCircle />
              <FollowingCircle />
            </div>

            <div>
              <h1 className="font-bold text-2xl my-3">Your Feed</h1>

              <div className="flex flex-col space-y-5">
                <PreviewPost
                  title="Welcome to Kirfley!"
                  user="Stevemmmmm"
                  body="Hey everyone! Thanks for coming onto Kirfley"
                />
                <PreviewPost
                  title="Welcome to Kirfley!"
                  user="Stevemmmmm"
                  body="Hey everyone! Thanks for coming onto Kirfley"
                />
                <PreviewPost
                  title="Welcome to Kirfley!"
                  user="Stevemmmmm"
                  body="Hey everyone! Thanks for coming onto Kirfley"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
