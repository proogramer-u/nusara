import Image from "next/image";
export function Brand({ className = "" }: { className?: string }) {
  return (
    <Image
      className={`brand ${className}`}
      src="/images/brand/nusara-logo.png"
      alt="NUSARA"
      width={884}
      height={322}
      sizes="150px"
    />
  );
}
