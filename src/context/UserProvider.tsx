import React, { useEffect, useState, createContext } from "react";
// import { getPersonSummary } from "../services/PersonService";
// import { getOrganization } from "../services/OrganizationService";
import { GetPersonSummaryData } from "../types/PersonTypes";
import {
  Organization,
  GetOverallHealthDetailsType,
} from "../types/MemberTypes";
// import { getMemberHealthDetails } from "../services/MemberService";

type UserProviderProps = { children: React.ReactNode };

export type UserStateContextType = {
  userProfile: GetPersonSummaryData;
  tempUserProfile: GetPersonSummaryData;
  organizations: Organization[];
  healthPlans: GetOverallHealthDetailsType;
};

export const UserStateContext = createContext<any | undefined>(undefined);

function UserProvider({ children }: UserProviderProps) {
  const [userState, setUserState] = useState<UserStateContextType>({
    userProfile: {
      personInfo: {
        personID: 0,
        firstName: "",
        middleInitial: "",
        lastName: "",
        dateOfBirth: "",
        primaryLanguage: "",
        age: 0,
        email: "",
        primaryPhoneNumber: "",
        gender: "",
      },
      personAddresses: {
        homeAddress: {
          address1: "",
          address2: "",
          city: "",
          state: "",
          zip: "",
        },
        mailingAddress: {
          address1: "",
          address2: "",
          city: "",
          state: "",
          zip: "",
        },
      },
      personContact: {
        homePhone: "",
        workPhone: "",
        homeEmailAddress: "",
        workEmailAddress: "",
      },
      preferredContactMethod: [],
    } as GetPersonSummaryData,
    tempUserProfile: {
      personInfo: {
        personID: 0,
        firstName: "",
        middleInitial: "",
        lastName: "",
        dateOfBirth: "",
        primaryLanguage: "",
        age: 0,
        email: "",
        primaryPhoneNumber: "",
        gender: "",
      },
      personAddresses: {
        homeAddress: {
          address1: "",
          address2: "",
          city: "",
          state: "",
          zip: "",
        },
        mailingAddress: {
          address1: "",
          address2: "",
          city: "",
          state: "",
          zip: "",
        },
      },
      personContact: {
        homePhone: "",
        workPhone: "",
        homeEmailAddress: "",
        workEmailAddress: "",
      },
      preferredContactMethod: [],
    } as GetPersonSummaryData,
    organizations: [],
    healthPlans: { healthCoverageDetails: [] } as GetOverallHealthDetailsType,
  });

  useEffect(() => {
    async function getUserProfile() {
      // const resp = await getPersonSummary();

      // setUserState((userState) => ({ ...userState, userProfile: resp }));
    }
    async function getUserProfileTwo() {
      // const resp = await getPersonSummary();
      // setUserState((userState) => ({ ...userState, tempUserProfile: resp }));
    }
    async function getUserOrganizations() {
      // const orgs = await getOrganization();
      // setUserState((userState) => ({ ...userState, organizations: orgs }));
    }
    async function getHealthPlan() {
      // const resp = await getMemberHealthDetails();
      // setUserState((userState) => ({ ...userState, healthPlans: resp }));
    }
    getUserProfile();
    getUserProfileTwo();
    getUserOrganizations();
    getHealthPlan();
  }, []);

  return (
    <UserStateContext.Provider value={[userState, setUserState]}>
      {children}
    </UserStateContext.Provider>
  );
}

export { UserProvider };
