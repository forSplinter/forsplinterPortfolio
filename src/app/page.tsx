import Header from "@/components/Header";
import Myproject from "@/components/Myproject";
import ScrollTable from "@/components/ScrollTable";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <ScrollTable />
      <Myproject />
    </>
  );
}
