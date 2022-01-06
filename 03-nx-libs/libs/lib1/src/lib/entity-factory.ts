import { Entity } from './entity';

let idCounter = 0;

export function createEntity(entity: Partial<Entity>): Entity {
  return {
    id: idCounter++,
    title: 'Title of the Entity',
    description: 'Description of the Entity',
    created: new Date(),
  };
}
