import { Appointment } from "../appointment/Appointment";
import { Property } from "../property/Property";

export type Client = {
  appointments?: Array<Appointment>;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  phone: string | null;
  property?: Property | null;
  updatedAt: Date;
};
