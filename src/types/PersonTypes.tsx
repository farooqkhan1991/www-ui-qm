export type GetPersonSummaryData = {
  personInfo: GetPersonInfoType;
  personAddresses: GetPersonAddressesType;
  personContact: GetPersonContactType;
  preferredContactMethod: GetPreferredContactMethodType[];
};

export type GetPersonApplicationType = {
  personTypeID: number;
  webApplicationId: number;
  webApplicationName: string;
  webApplicationDesc: string;
  webApplicationIcon: string;
  webApplicationBackground: string;
  webApplicationUrl: string;
  isActive: boolean;
  personID: number;
  webApplication: string;
};

export type GetPreferredContactMethodType = {
  label: string;
  value: boolean;
  selectedValue: string;
};

type GetAddressType = {
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
};

export type GetPersonAddressesType = {
  homeAddress: GetAddressType;
  mailingAddress: GetAddressType;
};

export type GetPersonContactType = {
  homePhone: string;
  workPhone: string;
  homeEmailAddress: string;
  workEmailAddress: string;
};

type GetPersonInfoType = {
  personID: number;
  firstName: string;
  lastName: string;
  middleInitial: string;
  gender: string;
  dateOfBirth: string;
  age: number;
  primaryLanguage: string;
  email: string;
  primaryPhoneNumber: string;
};

// type Contact = {
//   contactType: string;
//   contactValue: string;
// };

// type GetOrganization = {
//   organizationID: number;
//   organizationName: string;
//   contacts: Contact[];
// };

// type GetPersonType = {
//   personTypeID: number;
//   personTypeName: string;
// };

// export type UserProfile = {
//   personID: number;
//   firstName: string;
//   middleInitial: string;
//   lastName: string;
//   dob: string;
//   dateOfBirth: string;
//   phoneNumber: string;
//   medicalNumber: string;
//   healthPlan: string;
//   healthPlanId: number;
//   homeAddress: string;
//   city: string;
//   state: string;
//   zipCode: string;
//   primaryPhoneNumber: string;
// };

// export type MemberProfile = UserProfile & {
//   healthCareId: string;
//   medicalNumber: string;
// };

// export type MemberProfileState = {
//   profile: MemberProfile;
//   loading: boolean;
// };

// export function getEmptyUserProfile() {
//   return {
//     personID: 0,
//     firstName: "",
//     middleInitial: "",
//     lastName: "",
//     dob: "",
//     dateOfBirth: "",
//     phoneNumber: "",
//     medicalNumber: "",
//     healthPlan: "",
//     healthPlanId: 0,
//     homeAddress: "",
//     city: "",
//     state: "",

//     zipCode: "",
//     primaryPhoneNumber: ""
//   };
// }

// export type UserProfileState = {
//   profile: UserProfile;
//   loading: boolean;
// };
