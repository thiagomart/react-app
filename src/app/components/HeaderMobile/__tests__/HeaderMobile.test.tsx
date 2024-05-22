import { render } from '@testing-library/react'
import HeaderMobile  from '../index'

jest.mock('next/image', () => {
	return jest.fn().mockImplementation(({ src, alt }) => {
		return <img src={src} alt={alt} />;
	});
});

describe('[HeaderMobile] When render thew Component =>', () => {
	it('render the component with all texts and Images', () => {
		const { getByText, getByAltText} = render(<HeaderMobile />)
		
        expect(getByText("Let‘s start by setting up")).toBeInTheDocument()
        expect(getByText("your login details")).toBeInTheDocument()
		expect(getByAltText('Step Icon')).toBeInTheDocument();
		expect(getByAltText("back page")).toBeInTheDocument();
	})
})