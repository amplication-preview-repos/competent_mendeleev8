import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";
import { AppointmentCreateNestedManyWithoutPropertiesInput } from "./AppointmentCreateNestedManyWithoutPropertiesInput";
import { AssignmentCreateNestedManyWithoutPropertiesInput } from "./AssignmentCreateNestedManyWithoutPropertiesInput";
import { ClientCreateNestedManyWithoutPropertiesInput } from "./ClientCreateNestedManyWithoutPropertiesInput";

export type PropertyCreateInput = {
  address?: string | null;
  agent?: AgentWhereUniqueInput | null;
  appointments?: AppointmentCreateNestedManyWithoutPropertiesInput;
  assignments?: AssignmentCreateNestedManyWithoutPropertiesInput;
  clients?: ClientCreateNestedManyWithoutPropertiesInput;
  price?: number | null;
  status?: "Option1" | null;
};
