interface SectionTitleProps {
  Title: string;
  className?: string;
}

const SectionTitle = ({ Title, className }: SectionTitleProps) => {
  return (
    <h1
      className={`text-xl md:text-2xl lg:text-4xl font-semibold ${className}`}
    >
      {Title}
    </h1>
  );
};

export default SectionTitle;
