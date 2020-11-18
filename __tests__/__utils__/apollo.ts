import { DocumentNode } from '@apollo/client';

export interface GQLMocks {
  request: { query: DocumentNode; variables: any };
  result: { data: any };
}
