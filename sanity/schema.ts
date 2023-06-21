import { type SchemaTypeDefinition } from 'sanity'

import social from './schemas/social'
import skill from './schemas/skill'
import pageInfo from './schemas/pageInfo'
import experience from './schemas/experience'
import project from './schemas/project'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageInfo, experience, skill, project, social],
}
