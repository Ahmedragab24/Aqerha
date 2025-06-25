import Image from "next/image";

interface ArrowTLBlendProps {
  color: "white" | "black";
  className?: string;
}

const ArrowTLBlend = ({ color, className }: ArrowTLBlendProps) => {
  return (
    <div className={`absolute top-4 left-4 ${className}`}>
      {color === "white" ? (
        <Image
          src="/Icons/ArrowTLBlend.svg"
          alt="Triangle"
          width={30}
          height={30}
        />
      ) : (
        <Image
          src="/Icons/ArrowTLBlendBlack.svg"
          alt="Triangle"
          width={30}
          height={30}
        />
      )}
    </div>
  );
};

export default ArrowTLBlend;
