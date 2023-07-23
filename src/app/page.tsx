import Image from "next/image";

export default function Home() {
  return (
    <section className="home">
      <div className="sec_header">
        <h1>
          <strong>Sake Sake</strong>
        </h1>
      </div>
      <div className="sec_body">
        <div>
          <Image src="/assets/home.png" alt="bar" width={400} height={400} />
        </div>
      </div>
    </section>
  );
}
