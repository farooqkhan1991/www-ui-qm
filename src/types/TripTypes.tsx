import { Moment } from "moment";

export type Trip = {
  appointmentDate: string;
  appointmentTime?: string;
  requestedPickTime: string;
  isWillCall: boolean;
  tripStatus: string;
  pickCommonName: string;
  pickAddress1: string;
  pickAddress2: string;
  pickCity: string;
  pickState: string;
  pickZip?: string;
  dropCommonName: string;
  dropAddress1: string;
  dropAddress2: string;
  dropCity: string;
  dropState: string;
  dropZip?: string;
  providerId: number;
  providerName: string;
  providerPhone: string | undefined;
  groupId: number;
  providerTripId: string;
  mfTripId: number;
  medicalFacilityName: string;
  tripReason: string;
  mode: string;
  tripMiles: string;
  providerSuppliedScheduledPickUpTime: string;
  reservationId: number;
  isCancelled: boolean;
  customerId: number;
};

export type GroupTrips = {
  groupId: number;
  trips: Trip[];
};

export type AppointmentType = {
  appointmentId: number;
  pickupLocation: TripLocationType;
  scheduledTime: string;
  appointmentLocation: TripLocationType;
  appointmentReason: string;
  appointmentReasonDisplay?: string;
  pickFacilityType?: string;
};

export type TripReasonType = {
  description: string;
  tripPurposeId: number;
  pickFacilityType: string;
};

export type TripLocationType = {
  locationName: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  zip: string;
  lat: number;
  lng: number;
  phoneNumber: string;
  value: string;
};

export type WheelChairTypesType = {
  id: number;
  wheelchairType: string;
};

export type PassengerInformationType = {
  firstName: string;
  lastName: string;
  dateOfBirth: Moment | null;
  relationship: string;
  appointment: any;
  wheelchair: any;
  wheelchairType: null | string;
  passengerId: number;
  medicalNumber: string;
};

export type SpecialNeedsType = {
  wheelchair: boolean;
  wheelchairType: string;
  transfer: any;
  wheelchairWeight: string;
  wheelchairId: number;
};

export type RelationshipTypesType = {
  id: number;
  familyRelationship: string;
};

export type ReturnRideType = {
  appointmentLocation: TripLocationType;
  pickupLocation: TripLocationType;
  returnRideId: number;
  scheduledTime?: string | Moment;
  willCall: boolean;
  appointmentReason: string;
};

export type RideRequestValidation = {
  id: number;
  errors: string[];
};

export type ReservationTripType = {
  date: string;
  scheduledTime: string;
  isWillCall: boolean;
  tripPurposeID: number;
  pickAddress1: string;
  pickAddress2: string;
  pickCity: string;
  pickState: string;
  pickZip: string;
  pickLatitude: number;
  pickLongitude: number;
  pickMedicalProviderName: string;
  pickMedicalProviderPhoneNumber: number;
  dropAddress1: string;
  dropAddress2: string;
  dropCity: string;
  dropState: string;
  dropZip: string;
  dropLatitude: number;
  dropLongitude: number;
  dropMedicalProviderName: string;
  dropMedicalProviderPhoneNumber: number;
};

type ReservationSpecialNeedsType = {
  wheelchairType: string;
  canTransfer: boolean;
  isWheelchair: boolean;
  wheelchairWeight: string;
};

type ReservationPassengerInformationType = {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  relationship: string;
  hasAppointment: boolean;
  wheelchairType: null | string;
  passengerMedicalNumber: string;
};

export type ReservationType = {
  trips: ReservationTripType[];
  additionalPassengerInfo: ReservationPassengerInformationType[];
  specialNeedsInfo: ReservationSpecialNeedsType;
};
