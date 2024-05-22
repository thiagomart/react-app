import { render } from '@testing-library/react'
import Success  from '../page'

jest.mock('next/image', () => {
	return jest.fn().mockImplementation(({ src, alt }) => {
		return <img src={src} alt={alt} />;
	});
});

describe('[SuccessPage] When render thew Component =>', () => {
	it('render the component with all texts and Images', () => {
		const { getByText, getByAltText } = render(<Success />)
		
    expect(getByText("Congrats")).toBeInTheDocument()
    expect(getByText("You‘ll be automatically verified for all future orders.")).toBeInTheDocument()
    expect(getByText("You‘ve been successfully verified!")).toBeInTheDocument()
    expect(getByText("Your orders will be dispatched without delay.")).toBeInTheDocument()
    expect(getByText("You‘ll be automatically verified for all future orders. Your orders will be dispatched without delay.")).toBeInTheDocument()
		expect(getByAltText("Background")).toBeInTheDocument();
		expect(getByAltText("VerifyMyAge Logo")).toBeInTheDocument();
		expect(getByAltText("logo")).toBeInTheDocument();
	})
})