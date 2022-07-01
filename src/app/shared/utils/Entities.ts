import { Guid } from "guid-typescript";
import { Entity } from "../models/Entities";

export const createEntity = (parent: Entity): Entity => {
  const id = Guid.create()
  return { id, name: `object_${Math.floor(Math.random() * 10)}${id}`, parent }
}