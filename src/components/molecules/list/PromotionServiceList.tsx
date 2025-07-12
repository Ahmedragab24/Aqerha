import Image from 'next/image'
import React from 'react'

const PromotionServiceList = () => {
  return (
    <ul className="flex flex-col gap-6">
    <li className="flex items-center gap-4">
      <div className="p-1 bg-secondary rounded-full">
        <Image
          src="/Icons/check.svg"
          alt="check"
          width={20}
          height={20}
        />
      </div>

      <h3 className="text-lg">
        يتم إبراز الإعلانات المميزة لتكون في أعلى القائمة
      </h3>
    </li>
    <li className="flex items-center gap-4">
      <div className="p-1 bg-secondary rounded-full">
        <Image
          src="/Icons/check.svg"
          alt="check"
          width={20}
          height={20}
        />
      </div>

      <h3 className="text-lg">تحصل على أيقونة خاص و مظهر فريد يبرزها</h3>
    </li>
    <li className="flex items-center gap-4">
      <div className="p-1 bg-secondary rounded-full">
        <Image
          src="/Icons/check.svg"
          alt="check"
          width={20}
          height={20}
        />
      </div>

      <h3 className="text-lg">
        تحصل على تفاعلات أعلى من الإعلانات الغير مميزة
      </h3>
    </li>
  </ul>
  )
}

export default PromotionServiceList
