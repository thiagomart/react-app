import { render } from '@testing-library/react'
import HeaderDesktop  from '../index'

jest.mock('next/image', () => {
	return jest.fn().mockImplementation(({ src, alt }) => {
		return <img src={src} alt={alt} />;
	});
});

describe('[HeaderDesktop] When render thew Component =>', () => {
	it('render the component with all texts and Images', () => {
		const { getByText, getByAltText } = render(<HeaderDesktop />)
		
        expect(getByText('Join VerifyMyAge')).toBeInTheDocument()
        expect(getByText("Let's start by setting up your login details")).toBeInTheDocument()
		expect(getByAltText('VerifyMyAge Logo')).toBeInTheDocument();
		expect(getByAltText('back page')).toBeInTheDocument();
		expect(getByAltText('Step Icon')).toBeInTheDocument();
	})
})