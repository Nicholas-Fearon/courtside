import Image from "next/image";
import LeagueTable from "@/components/Table";
export default function HomePage() {
  return (
    <>
      <LeagueTable />

      <Image
        src={`/nba.png`}
        width={100}
        height={250}
        alt="Picture of the NBA Logo"
        />
    </>
  );
}
