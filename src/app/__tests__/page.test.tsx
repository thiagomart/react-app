import { render, screen, fireEvent } from '@testing-library/react'
import Home from '../page'
import Image from "next/image";
import Form from '../components/Form';
import HeaderDesktop from '../components/HeaderDesktop';
import HeaderMobile from '../components/HeaderMobile';

jest.mock('../components/Form', () => ({
    __esModule: true,
    default: jest.fn(({ terms, setTerms }) => <div data-testid="form-component">{terms} {setTerms}</div>),
}));
jest.mock('../components/HeaderDesktop', () => ({
    __esModule: true,
    default: jest.fn(() => <div data-testid="HeaderDesktop"></div>),
}));
jest.mock('../components/HeaderMobile', () => ({
    __esModule: true,
    default: jest.fn(() => <div data-testid="headerMobile"></div>),
}));

jest.mock('next/image', () => {
	return jest.fn().mockImplementation(({ src, alt }) => {
		return <img src={src} alt={alt} />;
	});
});

describe('[HomeComponent] When render the inital page =>', () => {
	it('Then will render the component Home with all childrens', () => {
        const { getByTestId, getByAltText } = render(<Home />)

        expect(getByTestId('form-component')).toBeInTheDocument()
		expect(getByTestId('HeaderDesktop')).toBeInTheDocument()
		expect(getByTestId('headerMobile')).toBeInTheDocument()
		expect(getByAltText('Background')).toBeInTheDocument()
	})
})