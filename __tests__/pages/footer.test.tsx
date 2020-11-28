import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';
import Footer from '../../components/footer';

it('renders correctly', () => {
  const container = document.createElement('div');
  ReactDOM.render(<Footer />, container);

  expect(container).toMatchSnapshot();
});

describe('footer', () => {
  beforeEach(() => render(<Footer />));

  describe('about column', () => {
    let aboutColumn: HTMLElement;

    beforeEach(() => {
      aboutColumn = screen.getByText('About', { selector: 'li' }).parentElement;
    });

    it('renders correctly', () => {
      expect(aboutColumn).toBeInTheDocument;
    });

    it('has a company link', () => {
      expect(aboutColumn.children.item(1).textContent).toBe('Company');
    });
  });

  describe('support column', () => {
    let supportColumn: HTMLElement;

    beforeEach(() => {
      supportColumn = screen.getByText('Support', { selector: 'li' })
        .parentElement;
    });

    it('renders correctly', () => {
      expect(supportColumn).toBeInTheDocument;
    });

    it('has a contact us link', () => {
      expect(supportColumn.children.item(1).textContent).toBe('Contact Us');
    });
  });

  describe('legal column', () => {
    let legalColumn: HTMLElement;

    beforeEach(() => {
      legalColumn = screen.getByText('Legal', { selector: 'li' }).parentElement;
    });

    it('renders correctly', () => {
      expect(legalColumn).toBeInTheDocument;
    });

    it('has a privacy policy link', () => {
      expect(legalColumn.children.item(1).textContent).toBe('Privacy Policy');
    });

    it('has a cookie policy link', () => {
      expect(legalColumn.children.item(2).textContent).toBe('Cookie Policy');
    });
  });
});
