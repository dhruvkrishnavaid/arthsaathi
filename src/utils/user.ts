import axios from "axios";
import { combine, persist } from "zustand/middleware";
import { create } from "zustand/react";
import { User } from "./interfaces";

export const getUser = (): User | null => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

const getFullUser = async (user: User) => {
  const res = await axios({
    method: "POST",
    url: import.meta.env.VITE_BASEURL + "/user",
    data: { email: user.email },
  });
  const updatedUser = res.data;
  return {
    ...user,
    name: updatedUser.name || "",
    age: updatedUser.age || 18,
    income: updatedUser.income || 0,
    familySize: updatedUser.familySize || 0,
    married: updatedUser.married || false,
    location: updatedUser.location || "",
    educationLevel: updatedUser.educationLevel || "Illiterate",
    profession: updatedUser.profession || "",
    financialGoals: updatedUser.financialGoals || ["Savings"],
    riskTolerance: updatedUser.riskTolerance || "Low",
    currentSavings: updatedUser.currentSavings || 0,
  };
};

const updateUser = async (user: User) => {
  await axios({
    method: "PUT",
    url: import.meta.env.VITE_BASEURL + "/updateUser",
    data: user,
  });
  alert("User updated successfully");
};

export const useUserStore = create(
  persist(
    combine({ user: getUser() || null }, (set) => ({
      setUser: (user: User) => {
        set({ user: user });
      },
      removeUser: () => {
        set({ user: null });
      },
      getFullUser: async (user: User) => {
        if (user) {
          const fullUser = await getFullUser(user);
          if (fullUser) {
            set({ user: fullUser });
          } else {
            set({ user: user });
          }
        }
      },
      updateUser: async (user: User) => {
        await updateUser(user);
        set({ user: user });
      },
    })),
    { name: "user" },
  ),
);
