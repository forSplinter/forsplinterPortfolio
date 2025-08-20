import Header from "@/components/Header";
import Myproject from "@/components/Myproject";
import ScrollTable from "@/components/ScrollTable";
import { projects } from '../data';
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section id="header"  className="mt-32">
        <Header />
      </section>
      <section className="mt-10">
        <ScrollTable />
      </section>
      <section id="my-projects" className="mt-32">
        <Myproject />
      </section>
    </div>
  );
}
