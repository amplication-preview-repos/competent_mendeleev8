import { AppointmentUpdateManyWithoutAgentsInput } from "./AppointmentUpdateManyWithoutAgentsInput";
import { AssignmentUpdateManyWithoutAgentsInput } from "./AssignmentUpdateManyWithoutAgentsInput";
import { PropertyUpdateManyWithoutAgentsInput } from "./PropertyUpdateManyWithoutAgentsInput";

export type AgentUpdateInput = {
  appointments?: AppointmentUpdateManyWithoutAgentsInput;
  assignments?: AssignmentUpdateManyWithoutAgentsInput;
  email?: string | null;
  name?: string | null;
  phone?: string | null;
  properties?: PropertyUpdateManyWithoutAgentsInput;
};
