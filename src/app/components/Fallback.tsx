import Image from "next/image";


export default function Fallback({ text }: { text: string }) {
  return (
    <div className="fallback">
      <Image
        className="fallback_img loadingImg"
        src="/assets/logo.png"
        alt="is loading"
        width={100}
        height={100}
        priority={true} 
      />
      <span className="fallback_text">{text}</span>
    </div>
  );
}
