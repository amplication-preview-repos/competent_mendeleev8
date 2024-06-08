import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";
import { AppointmentUpdateManyWithoutPropertiesInput } from "./AppointmentUpdateManyWithoutPropertiesInput";
import { AssignmentUpdateManyWithoutPropertiesInput } from "./AssignmentUpdateManyWithoutPropertiesInput";
import { ClientUpdateManyWithoutPropertiesInput } from "./ClientUpdateManyWithoutPropertiesInput";

export type PropertyUpdateInput = {
  address?: string | null;
  agent?: AgentWhereUniqueInput | null;
  appointments?: AppointmentUpdateManyWithoutPropertiesInput;
  assignments?: AssignmentUpdateManyWithoutPropertiesInput;
  clients?: ClientUpdateManyWithoutPropertiesInput;
  price?: number | null;
  status?: "Option1" | null;
};
