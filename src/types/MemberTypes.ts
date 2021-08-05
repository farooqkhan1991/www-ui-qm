export type GetOverallHealthDetailsType = {
  healthCoverageDetails: GetMedicalHealthPlan[];
};

export type GetMedicalHealthPlan = {
  benefitGroup: string;
  healthPlanId: string;
  medicalId: string;
  effectiveDate: string;
  status: string;
  keyType: string;
  endDate: string;
  person: GetMember;
  healthPlanName: string;
  healthPlanPhoneNumber: string;
};

type GetMember = {
  dateOfBirth: string;
  age: number;
  gender: string;
  personID: number;
  primaryPhoneNumber: string;
  name: string;
  address: string;
};

// export type MemberSearchParams = {
//   zipCode?: number;
//   lastName?: string;
//   dateOfBirth?: string;
//   medicalNumber?: string;
//   phoneNumber?: number;
// };

// export type MemberListState = {
//   inputFields: InputField[];
//   members: Member[];
//   loading: boolean;
//   fieldErrors: any[];
//   errors: any;
//   member: any;
//   memberSearchError: boolean;
// };

// export type FieldOption = {
//   id: any;
//   value: any;
//   display: string;
// };

// export enum FieldType {
//   INPUT,
//   SELECT,
//   MULTI_SELECT
// }

// export type FieldError = {
//   fieldName: string;
//   error: string;
// };

// export type InputField = {
//   placeholder: string;
//   name: any;
//   value: any;
//   disable: boolean;
//   mask: any;
//   display: boolean;
//   errors: string;
//   fieldType: FieldType;
//   options?: FieldOption[];
//   inputType?: string;
//   inputAutoComplete?: string;
// };

// export type Member = {
//   personId: number;
//   firstName: string;
//   middleInitial: string;
//   lastName: string;
//   dob: string;
//   dateOfBirth: string;
//   phoneNumber: string;
//   medicalNumber: string;
//   healthPlan: string;
//   healthPlanId: number;
//   zipCode: string;
// };

// export type MemberEligibility = {
//   parentOrganizationId: number;
//   parentOrgCode: string;
//   parentOrganizationName: string;
//   organizationId: number;
//   organizationCode: string;
//   organizationName: string;
//   businessKey: string;
//   keyType: string;
//   beginEffectiveDate: string;
//   endEffectiveDate: string;
// };

export type Organization = {
  organizationId: number;
  organizationName: string;
  organizationCode: string;
  organizationTypeId: number;
  address1: string;
  city: string;
  state: string;
  zipCode: string;
  officePhone: string;
  officeEmail: string;
  organizationAttributes: string;
  parentOrganizationId: number;
  organizationTypeName: string;
};
