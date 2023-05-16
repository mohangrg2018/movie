import Image from "next/image";

export default function Loading() {
  return (
    <div>
      <Image src="loader.svg" width={30} height={30} />
    </div>
  );
}
