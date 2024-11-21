import Image from "next/image";
export default function HomePage() {
  return (
    <>
      

      <Image
        src={`/nba.png`}
        width={100}
        height={250}
        alt="Picture of the NBA Logo"
        />
    </>
  );
}
