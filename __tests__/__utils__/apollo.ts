import { DocumentNode } from "@apollo/client";

export interface ApolloMock {
    request: { query: DocumentNode; variables: any };
    result: { data: any };
}
