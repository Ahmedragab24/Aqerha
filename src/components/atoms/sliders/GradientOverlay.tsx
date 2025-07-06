interface Props {
  position: "top" | "bottom";
}

const GradientOverlay = ({ position }: Props) => {
  return (
    <div
      className={`absolute inset-0 ${
        position === "bottom" ? "bg-gradient-to-t" : "bg-gradient-to-b"
      }  from-black/40 via-transparent to-transparent`}
    />
  );
};

export default GradientOverlay;
