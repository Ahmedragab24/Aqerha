import React from "react";

interface Props {
  description: string;
}

const DescriptionProperty = ({ description }: Props) => {
  return (
    <div className="mb-8">
      <div className="text-gray-700 leading-relaxed text-right space-y-4">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default DescriptionProperty;
