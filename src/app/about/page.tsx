import Image from "next/image";

export default function About() {
  return (
    <section className="about">
      <div className="sec_header">
        <h1>
          <strong>Sake Sake</strong>とは
        </h1>
      </div>
      <div className="sec_body">
        <div className="about_box">
          <h2>
            <strong>Sake Sake</strong>は京都で開業し創業１0年となりました
          </h2>
          <p>
            ビールを含む１００種類以上のカクテルをメインにドリンク全て
            <b>4００円</b>で提供している全国展開中のショットバーです。
            商品品質に関して、世界的に有名な酒造メーカーのボトル、自社工場で生産したカクテル用氷、セントラルキッチンでのフード開発および制作をしており、品質にもこだわっております。
          </p>
          <div className="about_img">
            <Image
              src="/assets/about1.png"
              alt="bar"
              height={200}
              width={150}
            />
          </div>
        </div>
        <div className="about_box">
          <h2>チャージ料金について</h2>
          <p>
            Sake Sakeでは<b>チャージ料金500円</b>（税抜き） を頂いております。
            このチャージ料金でスタッフ費・家賃等々に充当させて運営させて頂いております。
            お客様の平均１人あたり<b>2,500円</b>位でご利用頂いております。
          </p>
          <div className="about_img">
            <Image
              src="/assets/about2.png"
              alt="bar"
              height={260}
              width={175}
            />
          </div>{" "}
        </div>
      </div>
    </section>
  );
}
