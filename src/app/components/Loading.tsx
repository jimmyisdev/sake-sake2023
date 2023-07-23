import Image from "next/image";

export default function Loading() {
  return (
    <div className="loadingContainer">
      <Image className="loadingImg" src="/assets/logo.png" alt="is loading" width={100} height={100} />
      <span className="loadingText">Loading...</span>
    </div>
  );
}
