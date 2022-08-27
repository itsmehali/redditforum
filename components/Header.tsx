import React from "react";
import Image from "next/image";
import {
  BeakerIcon,
  MagnifyingGlassIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";
import {
  GlobeEuropeAfricaIcon,
  VideoCameraIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  BellIcon,
  SparklesIcon,
  PlusIcon,
  ChevronDownIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import Home from "../pages";
import { signIn, signOut, useSession } from "next-auth/react";

function Header() {
  const { data: session } = useSession();

  return (
    <div className="sticky top-0 z-50 flex bg-white px-5 py-2 shadow-sm">
      <div className="relative h-10 w-20 flex-shrink-0 cursor-pointer">
        <Image objectFit="contain" src="/Reddit-Logo.png" layout="fill" />
      </div>

      <div className="mx-7 flex items-center xl:min-w-[300px]">
        <HomeIcon className="h-5 w-5" />
        <p className="ml-2 flex-1 ml-2 hidden lg:inline">Home</p>
        <ChevronDownIcon className="h-5 w-5" />
      </div>

      {/* Search box */}
      <form className="flex flex-1 items-center space-x-2 border-gray-200 rounded-sm bg-gray-100 px-3 py-1">
        <MagnifyingGlassIcon className="h-6 w-6 text-gray-400" />
        <input
          className="flex-1 bg-transparent outline-none"
          type="text"
          placeholder="Search Reddit"
        />
        <button hidden type="submit" />
      </form>

      <div className="flex text-gray-500 mx-5 hidden lg:inline-flex">
        <SparklesIcon className="icon" />
        <GlobeEuropeAfricaIcon className="icon" />
        <VideoCameraIcon className="icon" />
        <hr className="h-10" />
        <ChatBubbleOvalLeftEllipsisIcon className="icon" />
        <BellIcon className="icon" />
        <PlusIcon className="icon" />
      </div>
      <div className="ml-5 items-center lg:hidden">
        <Bars3Icon className="icon" />
      </div>

      {/*Sign in, Sing out */}
      {session ? (
        <div
          onClick={() => signOut()}
          className="hidden cursor-pointer items-center space-x-2 border border-gray-100 p-2 lg:flex"
        >
          <div className="flex-1 text-xs">
            <p>{session.user?.name}</p>
            <p className="text-gray-400">1 Karma</p>
          </div>
          <ChevronDownIcon className="h-5 flex-shrink-0 text-gray-400" />
        </div>
      ) : (
        <div
          onClick={() => signIn()}
          className="hidden cursor-pointer items-center space-x-2 border border-gray-100 p-2 lg:flex"
        >
          <p className="text-gray-400">Sign in</p>
        </div>
      )}
    </div>
  );
}

export default Header;
