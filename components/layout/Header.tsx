import Link from "next/link";
import Logo from "@/components/svgs/Logo";
import Account from "@/components/layout/Account";

export default function Header() {
  return (
    <div className="z-10 absolute flex justify-between items-center top-5 left-5 right-5">
      <Link href="/" className="cursor-pointer">
        <Logo />
      </Link>
      <Account />
    </div>
  );
}
