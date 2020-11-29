import { MockedProvider } from '@apollo/client/testing';
import { act } from '@testing-library/react';
import ReactDOM from 'react-dom';
import AuthForm from '../../components/forms/auth-form';

describe('login form', () => {
    it('renders properly', () => {
        const container = document.createElement('div');

        act(() => {
            ReactDOM.render(
                <MockedProvider addTypename={false}>
                    <AuthForm />
                </MockedProvider>,
                container
            );
        });

        expect(container).toMatchSnapshot();
    });
});
