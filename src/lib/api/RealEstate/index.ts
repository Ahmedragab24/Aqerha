import {
  RealEstateByIdResponse,
  RealEstatesResponse,
} from "@/store/services/RealEstate";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getAllRealEstates() {
  try {
    const res = await fetch(`${API_BASE_URL}/real-estates`, {
      cache: "force-cache",
    });

    if (!res.ok) throw new Error("فشل في جلب البيانات");

    const data: RealEstatesResponse = await res.json();
    return data;
  } catch (error) {
    console.error("خطأ أثناء جلب المنتجات:", error);
    return null;
  }
}

export async function getRealEstateById(realEstateId: number) {
  try {
    const res = await fetch(`${API_BASE_URL}/real-estate/${realEstateId}`, {
      cache: "force-cache",
    });

    if (!res.ok) throw new Error("فشل في جلب البيانات");

    const data: RealEstateByIdResponse = await res.json();
    return data;
  } catch (error) {
    console.error("خطأ أثناء جلب المنتجات:", error);
    return null;
  }
}
