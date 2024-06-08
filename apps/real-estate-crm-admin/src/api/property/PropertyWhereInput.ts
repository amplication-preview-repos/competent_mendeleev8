import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AgentWhereUniqueInput } from "../agent/AgentWhereUniqueInput";
import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { AssignmentListRelationFilter } from "../assignment/AssignmentListRelationFilter";
import { ClientListRelationFilter } from "../client/ClientListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type PropertyWhereInput = {
  address?: StringNullableFilter;
  agent?: AgentWhereUniqueInput;
  appointments?: AppointmentListRelationFilter;
  assignments?: AssignmentListRelationFilter;
  clients?: ClientListRelationFilter;
  id?: StringFilter;
  price?: FloatNullableFilter;
  status?: "Option1";
};
