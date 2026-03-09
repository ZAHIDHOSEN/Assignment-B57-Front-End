
import toast from "react-hot-toast";

export const logout = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/auth/logout`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }
    );

    const data = await res.json();

    if (!res.ok) {
      toast.error("Logout failed");
      return null;
    }

    toast.success("Logout successful");
    return data;

  } catch (err) {
    console.error("Logout error:", err);
    toast.error("Logout error");
  }
};