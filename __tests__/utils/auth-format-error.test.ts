import formatError from '../../utils/auth-format-error';

test('properly formats auth error', () => {
    const errorMessage = 'error';

    expect(formatError(errorMessage)).toBe(` *${errorMessage}`);
});
