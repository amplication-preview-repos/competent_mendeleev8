import { Appointment } from "../appointment/Appointment";
import { Assignment } from "../assignment/Assignment";
import { Property } from "../property/Property";

export type Agent = {
  appointments?: Array<Appointment>;
  assignments?: Array<Assignment>;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  phone: string | null;
  properties?: Array<Property>;
  updatedAt: Date;
};
