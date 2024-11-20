import Image from "next/image";
export default function App() {
  return (
    <>
      <h2 className="text-sky-400">Hello</h2>

      <Image
        src={`/nba.png`}
        width={100}
        height={250}
        alt="Picture of the NBA Logo"
        />
    </>
  );
}
