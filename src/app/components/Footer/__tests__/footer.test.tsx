import { render } from '@testing-library/react'
import { Footer } from '../index'

jest.mock('next/image', () => {
	return jest.fn().mockImplementation(({ src, alt }) => {
		return <img src={src} alt={alt} />;
	});
});

describe('[FooterComponent] When render thew Component =>', () => {
	it('render the component with all buttons and Images', () => {
		const { getByText, getByAltText } = render(<Footer terms={false}/>)
		
		expect(getByText('Got a VerifyMyAge account? Sign in')).toBeInTheDocument()
		expect(getByText('Save')).toBeInTheDocument()
		expect(getByAltText('lock Icon')).toBeInTheDocument();
	})
	
})