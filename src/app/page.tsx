import Header from "@/components/Header";
import Myproject from "@/components/Myproject";
import ScrollTable from "@/components/ScrollTable";
import { projects } from '../data';
import Image from "next/image";
import Writtings from "@/components/Writings";
import ButtonType from "@/components/ButtonType";

export default function Home() {
  return (
    <div>
      <section id="header" className="mt-32">
        <Header />
      </section>
      <section className="mt-10">
        <ScrollTable />
      </section>
      <section id="my-projects" className="mt-32">
        <Myproject />
        <div className="mt-90 flex justify-center">
          <ButtonType />
        </div>
      </section>
      <section id="my-writtings" className="mt-32">
        <Writtings />
      </section>
    </div>
  );
}
