import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import DarkModeToggle from "@/components/ui/DarkModeToggle"
import { shadow } from "@/styles/utils";
import LogOutButton from "../LogOutButton";
import { getUser } from "@/auth/server";


const Header = async () => {
  const user = await getUser()
  return (
    <header className="bg-popover relative flex h-24 w-full items-center justify-between px-3 sm:px-8"
      style={{ boxShadow: shadow }}
    >
      <Link href="/" className=" flex items-center gap-2" >
        <Image
          src="/goatius.png"
          height={60}
          width={60}
          alt="goatius"
          priority
          className="rounded-full"
        />
        <h1 className=" flex  font-semibold flex-col pb-1 text-2xl leading-6  " >
          Goat <span> Notes </span>
        </h1>
      </Link>

      <div className="flex  gap-4 " >
        {
          user ?
            <LogOutButton />
            :
            <>
              <Button asChild  >
                <Link href="/sign-up">Sign Up</Link>
              </Button>
              <Button asChild variant={"outline"}>
                <Link href="/login">Login</Link>
              </Button>
            </>
        }
        <DarkModeToggle />
      </div>
    </header>
  );
};

export default Header;
