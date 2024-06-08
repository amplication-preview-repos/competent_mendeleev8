/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsOptional,
  ValidateNested,
  IsDate,
  IsNumber,
  IsEnum,
} from "class-validator";
import { Agent } from "../../agent/base/Agent";
import { Type } from "class-transformer";
import { Appointment } from "../../appointment/base/Appointment";
import { Assignment } from "../../assignment/base/Assignment";
import { Client } from "../../client/base/Client";
import { EnumPropertyStatus } from "./EnumPropertyStatus";

@ObjectType()
class Property {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  address!: string | null;

  @ApiProperty({
    required: false,
    type: () => Agent,
  })
  @ValidateNested()
  @Type(() => Agent)
  @IsOptional()
  agent?: Agent | null;

  @ApiProperty({
    required: false,
    type: () => [Appointment],
  })
  @ValidateNested()
  @Type(() => Appointment)
  @IsOptional()
  appointments?: Array<Appointment>;

  @ApiProperty({
    required: false,
    type: () => [Assignment],
  })
  @ValidateNested()
  @Type(() => Assignment)
  @IsOptional()
  assignments?: Array<Assignment>;

  @ApiProperty({
    required: false,
    type: () => [Client],
  })
  @ValidateNested()
  @Type(() => Client)
  @IsOptional()
  clients?: Array<Client>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  price!: number | null;

  @ApiProperty({
    required: false,
    enum: EnumPropertyStatus,
  })
  @IsEnum(EnumPropertyStatus)
  @IsOptional()
  @Field(() => EnumPropertyStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}

export { Property as Property };
