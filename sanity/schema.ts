import { type SchemaTypeDefinition } from 'sanity'
import pet from "@/sanity/pet";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pet],
}
