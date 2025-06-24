interface SectionTitleProps {
  Title: string;
  className?: string;
}

const SectionTitle = ({ Title, className }: SectionTitleProps) => {
  return (
    <h1 className={`text-2xl md:text-4xl font-bold ${className}`}>{Title}</h1>
  );
};

export default SectionTitle;
