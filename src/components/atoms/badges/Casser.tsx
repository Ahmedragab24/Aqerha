interface CasserProps {
  className?: string;
}

const Casser = ({ className }: CasserProps) => {
  return <div className={`w-[2px] h-14 bg-gray-300 ${className}`}></div>;
};

export default Casser;
