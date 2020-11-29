import { fireEvent } from '@testing-library/react';

export const setValue = (field: HTMLElement, value: string) =>
    fireEvent.change(field, { target: { value } });
