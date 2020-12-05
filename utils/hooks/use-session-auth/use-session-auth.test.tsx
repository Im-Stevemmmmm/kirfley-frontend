import { MockedResponse } from "@apollo/client/testing";
import { cleanup } from "@testing-library/react";
import { useSessionAuth } from "./use-session-auth";

afterEach(cleanup);

type ApolloMock = MockedResponse<Record<string, any>>;

const TestComponent = () => {
    useSessionAuth();

    return <div>Authenticated</div>;
};

test.todo("Fix error");

// test("redirects the user to index if not logged in", () => {
//     const mocks: ApolloMock[] = [
//         {
//             request: {
//                 query: MeDocument,
//             },
//             result: {
//                 data: {
//                     me: null,
//                 } as MeQuery,
//             },
//         },
//     ];

//     act(() => {
//         render(
//             <MockedProvider mocks={mocks}>
//                 <TestComponent />
//             </MockedProvider>
//         );
//     });

//     expect(screen.findByText(/authenticated/i)).not.toBeInTheDocument;
// });
