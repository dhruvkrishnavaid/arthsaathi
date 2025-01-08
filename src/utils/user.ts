import axios from "axios";

export interface User {
  email: string;
  password: string;
  name?: string;
  age?: number;
  income?: number;
  familySize?: number;
  married?: boolean;
  location?: string;
  educationLevel?: "Illiterate" | "Primary" | "Secondary" | "Higher Education";
  profession?: string;
  financialGoals?:
    | string[]
    | "Savings"
    | "Investment"
    | "Debt Management"
    | "Business Growth";
  riskTolerance?: "High" | "Medium" | "Low";
  currentSavings?: number;
}

export const setUser = (user: User) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const getUser = (): User | null => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

export const removeUser = () => {
  localStorage.removeItem("user");
};

export const getFullUser = async (user: User) => {
  const res = await axios({
    method: "GET",
    url: import.meta.env.VITE_BASEURL + "/user",
    data: { email: user.email },
  });
  const updatedUser = res.data;
  return {
    ...user,
    age: updatedUser.age || 18,
    income: updatedUser.income || 0,
    familySize: updatedUser.familySize || 0,
    married: updatedUser.married || false,
    location: updatedUser.location || "",
    educationLevel: updatedUser.educationLevel || "Illiterate",
    profession: updatedUser.profession || "",
    financialGoals: updatedUser.financialGoals || [],
    riskTolerance: updatedUser.riskTolerance || "Low",
    currentSavings: updatedUser.currentSavings || 0,
  };
};

export const updateUser = async (user: User) => {
  await axios({
    method: "PUT",
    url: import.meta.env.VITE_BASEURL + "/updateUser",
    data: user,
  });
};
