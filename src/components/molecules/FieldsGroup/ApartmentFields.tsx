// "use client";

// import { FormField, FormItem, FormLabel } from "../../ui/form";
// import React from "react";
// import CustomSelectField from "../selects/CustomSelectField";
// import CustomCheckboxField from "../checkboxs/CustomCheckboxField";
// import { numberOptions } from "@/constants/selects";
// import { TypePropertyType } from "@/types/Real-estates";
// import { useGetFeaturesByTypeQuery } from "@/store/services/Features";

// interface Props {
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   field: any;
// }

// const ApartmentFields = ({ field }: Props) => {
//   const propertyType = field.watch("propertyType") as TypePropertyType;
//   const { data } = useGetFeaturesByTypeQuery(propertyType);
//   const Features =
//     data?.features.map((feature) => ({
//       label: feature.name,
//       value: String(feature.id),
//     })) || [];

//   return (
//     <>
//       {/* Apartments and Halls */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <FormField
//           control={field}
//           name="apartments"
//           render={({ field }) => (
//             <CustomSelectField
//               field={field}
//               label="عدد الشقق *"
//               placeholder="اختر عدد الشقق"
//               options={numberOptions}
//               className="!h-11 border-border"
//             />
//           )}
//         />
//         <FormField
//           control={field}
//           name="halls"
//           render={({ field }) => (
//             <CustomSelectField
//               field={field}
//               label="عدد الصالات *"
//               placeholder="اختر عدد الصالات"
//               options={numberOptions}
//               className="!h-11 border-border"
//             />
//           )}
//         />
//       </div>

//       {/* Rooms and Bathrooms */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <FormField
//           control={field}
//           name="bedrooms"
//           render={({ field }) => (
//             <CustomSelectField
//               field={field}
//               label="عدد الغرف *"
//               placeholder="اختر عدد الغرف"
//               options={numberOptions}
//               className="!h-11 border-border"
//             />
//           )}
//         />
//         <FormField
//           control={field}
//           name="bathrooms"
//           render={({ field }) => (
//             <CustomSelectField
//               field={field}
//               label="عدد دورات المياه *"
//               placeholder="اختر عدد دورات المياه"
//               options={numberOptions}
//               className="!h-11 border-border"
//             />
//           )}
//         />
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <FormField
//           control={form.control}
//           name="bathrooms"
//           render={({ field }) => (
//             <CustomSelectField
//               field={field}
//               label="عدد الحمامات *"
//               placeholder="اختر عدد الحمامات"
//               options={numberOptions}
//               className="!h-11 border-border"
//             />
//           )}
//         />
//         <FormField
//           control={form.control}
//           name="salons"
//           render={({ field }) => (
//             <CustomSelectField
//               field={field}
//               label="عدد الصالات *"
//               placeholder="اختر عدد الصالات"
//               options={numberOptions}
//               className="!h-11 border-border"
//             />
//           )}
//         />
//       </div>

//       {/* Features */}
//       <FormField
//         control={field}
//         name="features"
//         render={({ field }) => (
//           <FormItem>
//             <FormLabel className="text-base font-semibold">
//               المميزات المطلوبة
//             </FormLabel>
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//               <CustomCheckboxField field={field} options={Features} />
//             </div>
//           </FormItem>
//         )}
//       />
//     </>
//   );
// };

// export default ApartmentFields;
