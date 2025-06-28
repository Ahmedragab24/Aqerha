import Image from "next/image";

interface PropertyFeaturesProps {
  className?: string;
}

const PropertyFeatures = ({ className }: PropertyFeaturesProps) => {
  return (
    <div className={`${className}`}>
      {/* Right Column */}
      <div className="space-y-4 border border-gray-300 rounded-md p-4">
        <div className="flex items-center justify-between pb-2 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <Image src="/Icons/Area.svg" alt="area" width={20} height={20} />
            <span className="text-[#7A7474] font-normal">المساحة الكلية</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-800">500 قدم مربع</span>
          </div>
        </div>

        <div className="flex items-center justify-between pb-2 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <Image
              src="/Icons/double-bed 1.svg"
              alt="bed"
              width={20}
              height={20}
            />
            <span className="text-[#7A7474] font-normal">غرف النوم</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-800">2</span>
          </div>
        </div>

        <div className="flex items-center justify-between pb-2 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <Image
              src="/Icons/bath-tub 1.svg"
              alt="bed"
              width={20}
              height={20}
            />
            <span className="text-[#7A7474] font-normal">الحمامات</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-800">2</span>
          </div>
        </div>

        <div className="flex items-center justify-between pb-2 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <Image src="/Icons/stairs 1.svg" alt="bed" width={20} height={20} />
            <span className="text-[#7A7474] font-normal">الطابق</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-800">الثالث</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/Icons/brick(2) 1.svg"
              alt="bed"
              width={20}
              height={20}
            />
            <span className="text-[#7A7474] font-normal">سنة البناء</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-800">2020</span>
          </div>
        </div>
      </div>

      {/* Left Column */}
      <div className="space-y-4 border border-gray-300 rounded-md p-4">
        <div className="flex items-center justify-between pb-2 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <Image
              src="/Icons/elevator 1.svg"
              alt="bed"
              width={20}
              height={20}
            />
            <span className="text-[#7A7474] font-normal">مصعد</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-800">2</span>
          </div>
        </div>

        <div className="flex items-center justify-between pb-2 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <Image
              src="/Icons/parking-sign 1.svg"
              alt="bed"
              width={20}
              height={20}
            />
            <span className="text-[#7A7474] font-normal">موقف سيارات</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-800">نعم</span>
          </div>
        </div>

        <div className="flex items-center justify-between pb-2 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <Image src="/Icons/wifi 1.svg" alt="bed" width={20} height={20} />
            <span className="text-[#7A7474] font-normal">واي فاي</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-800">نعم</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/Icons/tv 1.svg" alt="bed" width={20} height={20} />
            <span className="text-[#7A7474] font-normal">تلفزيون</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-800">نعم</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyFeatures;
