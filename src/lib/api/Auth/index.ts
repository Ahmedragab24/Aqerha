const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const UserLogout = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/logout`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("فشل تسجيل الخروج");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error during logout:", error);
    throw error;
  }
};
