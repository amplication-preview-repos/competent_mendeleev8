import { Agent } from "../agent/Agent";
import { Appointment } from "../appointment/Appointment";
import { Assignment } from "../assignment/Assignment";
import { Client } from "../client/Client";

export type Property = {
  address: string | null;
  agent?: Agent | null;
  appointments?: Array<Appointment>;
  assignments?: Array<Assignment>;
  clients?: Array<Client>;
  createdAt: Date;
  id: string;
  price: number | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
