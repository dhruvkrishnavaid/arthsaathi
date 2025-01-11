import { useState } from "react";
import { useNavigate } from "react-router";
import { useUserStore } from "../utils/user";
import { User } from "../utils/interfaces";

const Profile = () => {
  const store = useUserStore()
  const user = store.user;
  const [userState, setUserState] = useState<User | null>(user);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (userState) {
      store.setUser(userState);
      await store.updateUser(userState);
    }
  };
  const removeUser = () => {
    store.removeUser();
    navigate(0);
  };

  return (
    <div>
      <h1 className="py-4 text-4xl font-bold">Welcome {user?.name}</h1>
      <form className="flex flex-col w-full gap-4">
        <div className="flex items-center justify-between gap-4">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={userState?.name}
            onChange={(e) =>
              setUserState(
                userState ? { ...userState, name: e.target.value } : null,
              )
            }
            id="name"
            placeholder="Enter your name..."
            className="w-full px-2 py-3 border outline-0 gap-4 md:max-w-md lg:max-w-lg xl:max-w-xl"
          />
        </div>
        <hr />
        <div className="flex items-center justify-between gap-4">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            name="age"
            value={userState?.age}
            onChange={(e) =>
              setUserState(
                userState
                  ? { ...userState, age: parseInt(e.target.value) }
                  : null,
              )
            }
            id="age"
            placeholder="Enter your age..."
            className="w-full px-2 py-3 border outline-0 gap-4 md:max-w-md lg:max-w-lg xl:max-w-xl"
          />
        </div>
        <hr />
        <div className="flex items-center justify-between gap-4">
          <label htmlFor="income">Income</label>
          <input
            type="number"
            name="income"
            value={userState?.income}
            onChange={(e) =>
              setUserState(
                userState
                  ? { ...userState, income: parseInt(e.target.value) }
                  : null,
              )
            }
            id="income"
            placeholder="Enter your income..."
            className="w-full px-2 py-3 border outline-0 gap-4 md:max-w-md lg:max-w-lg xl:max-w-xl"
          />
        </div>
        <hr />
        <div className="flex items-center justify-between gap-4">
          <label htmlFor="familySize">Family Size</label>
          <input
            type="number"
            name="familySize"
            value={userState?.familySize}
            onChange={(e) =>
              setUserState(
                userState
                  ? { ...userState, familySize: parseInt(e.target.value) }
                  : null,
              )
            }
            id="familySize"
            placeholder="Enter your family size..."
            className="w-full px-2 py-3 border outline-0 gap-4 md:max-w-md lg:max-w-lg xl:max-w-xl"
          />
        </div>
        <hr />
        <div className="flex items-center justify-between gap-4">
          <label htmlFor="married">Marital Status</label>
          <select
            name="married"
            value={userState?.married ? "true" : "false"}
            onChange={(e) =>
              setUserState(
                userState
                  ? { ...userState, married: e.target.value === "true" }
                  : null,
              )
            }
            id="married"
            className="w-full px-2 py-3 border outline-0 gap-4 md:max-w-md lg:max-w-lg xl:max-w-xl"
          >
            <option value="false">Unmarried</option>
            <option value="true">Married</option>
          </select>
        </div>
        <hr />
        <div className="flex items-center justify-between gap-4">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            name="location"
            value={userState?.location}
            onChange={(e) =>
              setUserState(
                userState ? { ...userState, location: e.target.value } : null,
              )
            }
            id="location"
            placeholder="Enter your location..."
            className="w-full px-2 py-3 border outline-0 gap-4 md:max-w-md lg:max-w-lg xl:max-w-xl"
          />
        </div>
        <hr />
        <div className="flex items-center justify-between gap-4">
          <label htmlFor="educationLevel">Educational Status</label>
          <div className="flex flex-col w-full gap-8 md:max-w-md lg:max-w-lg xl:max-w-xl">
            <div className="flex items-center gap-4">
              <input
                type="radio"
                name="educationLevel"
                checked={userState?.educationLevel === "Illiterate"}
                onChange={(e) =>
                  setUserState(
                    userState
                      ? {
                          ...userState,
                          educationLevel: e.target.value as
                            | "Illiterate"
                            | "Primary"
                            | "Secondary"
                            | "Higher Education",
                        }
                      : null,
                  )
                }
                value="Illiterate"
                id="illiterate"
                className="w-4 h-4 px-2 py-3 border accent-neutral-900 outline-0 gap-4 md:max-w-md lg:max-w-lg xl:max-w-xl"
              />
              <label htmlFor="illiterate">Illiterate</label>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="radio"
                name="educationLevel"
                checked={userState?.educationLevel === "Primary"}
                onChange={(e) =>
                  setUserState(
                    userState
                      ? {
                          ...userState,
                          educationLevel: e.target.value as
                            | "Illiterate"
                            | "Primary"
                            | "Secondary"
                            | "Higher Education",
                        }
                      : null,
                  )
                }
                value="Primary"
                id="primary"
                className="w-4 h-4 px-2 py-3 border accent-neutral-900 outline-0 gap-4 md:max-w-md lg:max-w-lg xl:max-w-xl"
              />
              <label htmlFor="primary">Primary School</label>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="radio"
                name="educationLevel"
                checked={userState?.educationLevel === "Secondary"}
                onChange={(e) =>
                  setUserState(
                    userState
                      ? {
                          ...userState,
                          educationLevel: e.target.value as
                            | "Illiterate"
                            | "Primary"
                            | "Secondary"
                            | "Higher Education",
                        }
                      : null,
                  )
                }
                value="Secondary"
                id="secondary"
                className="w-4 h-4 px-2 py-3 border accent-neutral-900 outline-0 gap-4 md:max-w-md lg:max-w-lg xl:max-w-xl"
              />
              <label htmlFor="secondary">Secondary School</label>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="radio"
                name="educationLevel"
                checked={userState?.educationLevel === "Higher Education"}
                onChange={(e) =>
                  setUserState(
                    userState
                      ? {
                          ...userState,
                          educationLevel: e.target.value as
                            | "Illiterate"
                            | "Primary"
                            | "Secondary"
                            | "Higher Education",
                        }
                      : null,
                  )
                }
                value="Higher Education"
                id="higher"
                className="w-4 h-4 px-2 py-3 border accent-neutral-900 outline-0 gap-4 md:max-w-md lg:max-w-lg xl:max-w-xl"
              />
              <label htmlFor="higher">Higher Education</label>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex items-center justify-between gap-4">
          <label htmlFor="profession">Profession</label>
          <input
            type="text"
            name="profession"
            value={userState?.profession}
            onChange={(e) =>
              setUserState(
                userState ? { ...userState, profession: e.target.value } : null,
              )
            }
            id="profession"
            placeholder="eg. Farmer"
            className="w-full px-2 py-3 border outline-0 gap-4 md:max-w-md lg:max-w-lg xl:max-w-xl"
          />
        </div>
        <hr />
        <div className="flex items-center justify-between gap-4">
          <label htmlFor="financialGoals">Financial Goals</label>
          <div className="flex flex-col w-full gap-8 md:max-w-md lg:max-w-lg xl:max-w-xl">
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                name="financialGoals"
                checked={userState?.financialGoals?.includes("Savings")}
                onChange={(e) => {
                  if (userState) {
                    if (e.target.checked) {
                      setUserState({
                        ...userState,
                        financialGoals: [
                          ...(userState.financialGoals || []),
                          e.target.value,
                        ],
                      });
                    } else {
                      setUserState({
                        ...userState,
                        financialGoals: Array.isArray(userState.financialGoals)
                          ? userState.financialGoals.filter(
                              (goal) => goal !== e.target.value,
                            )
                          : [],
                      });
                    }
                  }
                }}
                value="Savings"
                id="savings"
                className="w-4 h-4 px-2 py-3 border accent-neutral-900 outline-0 gap-4 md:max-w-md lg:max-w-lg xl:max-w-xl"
              />
              <label htmlFor="savings">Savings</label>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                name="financialGoals"
                checked={userState?.financialGoals?.includes("Investment")}
                onChange={(e) => {
                  if (userState) {
                    if (e.target.checked) {
                      setUserState({
                        ...userState,
                        financialGoals: [
                          ...(userState.financialGoals || []),
                          e.target.value,
                        ],
                      });
                    } else {
                      setUserState({
                        ...userState,
                        financialGoals: Array.isArray(userState.financialGoals)
                          ? userState.financialGoals.filter(
                              (goal) => goal !== e.target.value,
                            )
                          : [],
                      });
                    }
                  }
                }}
                value="Investment"
                id="investment"
                className="w-4 h-4 px-2 py-3 border accent-neutral-900 outline-0 gap-4 md:max-w-md lg:max-w-lg xl:max-w-xl"
              />
              <label htmlFor="investment">Investment</label>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                name="financialGoals"
                checked={userState?.financialGoals?.includes("Debt Management")}
                onChange={(e) => {
                  if (userState) {
                    if (e.target.checked) {
                      setUserState({
                        ...userState,
                        financialGoals: [
                          ...(userState.financialGoals || []),
                          e.target.value,
                        ],
                      });
                    } else {
                      setUserState({
                        ...userState,
                        financialGoals: Array.isArray(userState.financialGoals)
                          ? userState.financialGoals.filter(
                              (goal) => goal !== e.target.value,
                            )
                          : [],
                      });
                    }
                  }
                }}
                value="Debt Management"
                id="debtManagement"
                className="w-4 h-4 px-2 py-3 border accent-neutral-900 outline-0 gap-4 md:max-w-md lg:max-w-lg xl:max-w-xl"
              />
              <label htmlFor="debtManagement">Debt Management</label>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="checkbox"
                name="financialGoals"
                checked={userState?.financialGoals?.includes("Business Growth")}
                onChange={(e) => {
                  if (userState) {
                    if (e.target.checked) {
                      setUserState({
                        ...userState,
                        financialGoals: [
                          ...(userState.financialGoals || []),
                          e.target.value,
                        ],
                      });
                    } else {
                      setUserState({
                        ...userState,
                        financialGoals: Array.isArray(userState.financialGoals)
                          ? userState.financialGoals.filter(
                              (goal) => goal !== e.target.value,
                            )
                          : [],
                      });
                    }
                  }
                }}
                value="Business Growth"
                id="businessGrowth"
                className="w-4 h-4 px-2 py-3 border accent-neutral-900 outline-0 gap-4 md:max-w-md lg:max-w-lg xl:max-w-xl"
              />
              <label htmlFor="businessGrowth">Business Growth</label>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex items-center justify-between gap-4">
          <label htmlFor="riskTolerance">Risk Tolerance</label>
          <div className="flex flex-col w-full gap-8 md:max-w-md lg:max-w-lg xl:max-w-xl">
            <div className="flex items-center gap-4">
              <input
                type="radio"
                name="riskTolerance"
                checked={userState?.riskTolerance === "Low"}
                onChange={(e) =>
                  setUserState(
                    userState
                      ? {
                          ...userState,
                          riskTolerance: e.target.value as
                            | "High"
                            | "Medium"
                            | "Low",
                        }
                      : null,
                  )
                }
                value="Low"
                id="riskToleranceLow"
                className="w-4 h-4 px-2 py-3 border accent-neutral-900 outline-0 gap-4 md:max-w-md lg:max-w-lg xl:max-w-xl"
              />
              <label htmlFor="riskToleranceLow">Low</label>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="radio"
                name="riskTolerance"
                checked={userState?.riskTolerance === "Medium"}
                onChange={(e) =>
                  setUserState(
                    userState
                      ? {
                          ...userState,
                          riskTolerance: e.target.value as
                            | "High"
                            | "Medium"
                            | "Low",
                        }
                      : null,
                  )
                }
                value="Medium"
                id="riskToleranceMid"
                className="w-4 h-4 px-2 py-3 border accent-neutral-900 outline-0 gap-4 md:max-w-md lg:max-w-lg xl:max-w-xl"
              />
              <label htmlFor="riskToleranceMid">Medium</label>
            </div>
            <div className="flex items-center gap-4">
              <input
                type="radio"
                name="riskTolerance"
                checked={userState?.riskTolerance === "High"}
                onChange={(e) =>
                  setUserState(
                    userState
                      ? {
                          ...userState,
                          riskTolerance: e.target.value as
                            | "High"
                            | "Medium"
                            | "Low",
                        }
                      : null,
                  )
                }
                value="High"
                id="riskToleranceHigh"
                className="w-4 h-4 px-2 py-3 border accent-neutral-900 outline-0 gap-4 md:max-w-md lg:max-w-lg xl:max-w-xl"
              />
              <label htmlFor="riskToleranceHigh">High</label>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex items-center justify-between gap-4">
          <label htmlFor="currentSavings">Current Savings</label>
          <input
            type="number"
            name="currentSavings"
            value={userState?.currentSavings}
            onChange={(e) =>
              setUserState(
                userState
                  ? { ...userState, currentSavings: parseInt(e.target.value) }
                  : null,
              )
            }
            id="currentSavings"
            placeholder="Enter your current savings..."
            className="w-full px-2 py-3 border outline-0 gap-4 md:max-w-md lg:max-w-lg xl:max-w-xl"
          />
        </div>
        <hr />
        <div className="flex items-center justify-between gap-4">
          <button
            type="reset"
            disabled={userState === user}
            className="w-full py-4 border cursor-pointer hover:bg-neutral-900 hover:text-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSubmit}
            disabled={userState === user}
            className="w-full py-4 text-white border cursor-pointer bg-neutral-900 hover:bg-white hover:text-neutral-900 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Save Changes
          </button>
        </div>
        <button
          type="button"
          onClick={removeUser}
          className="w-full py-4 text-white bg-red-900 border cursor-pointer hover:bg-red-50 hover:text-red-900 transition-colors duration-300"
        >
          Log Out
        </button>
      </form>
    </div>
  );
};

export default Profile;
