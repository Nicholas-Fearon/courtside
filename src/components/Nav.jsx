import Link from "next/link";

export default function Nav() {
  return (
    <div className="ml-5 mt-5 mb-6 h-10 ">
      <Link
        className="ml-4 m-10 cursor-pointer  hover:text-green-600 active:bg-green-700 focus:outline-none focus:ring focus:ring-green-300 underline"
        href={"/"}
      >
        Home
      </Link>
      <Link
        className="ml-4 cursor-pointer hover:text-green-600 active:bg-green-700 focus:outline-none focus:ring focus:ring-green-300 underline"
        href={"/teams"}
      >
        Teams
      </Link>
    </div>
  );
}
