import React, { Dispatch, SetStateAction, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Footer } from '../Footer';

type Props = {
	terms: boolean,
	setTerms: any
}

export default function Form({terms, setTerms}: Props) : JSX.Element{
	const router = useRouter();
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const [checked, setChecked] = useState(false);

	const schema = yup.object().shape({
		fullname: yup.string().required('Full Name is required'),
		phone: yup.string(),
		email: yup.string().email('Invalid Email').required('Email is required'),
		password: yup.string().min(6, 'Minimum is 6 digits').required('Password is required'),
	});

	const { register, handleSubmit, formState: { errors, isValid } } = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = () => {
		isValid && router.push("/success");
	};
	const handleCheckboxChange = () => {
		setTerms(!terms);
		setChecked(!checked);
	};

	return (
	<div>
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="mt-7 w-1/2 pt-[59.5px]">
				 <div className="mb-6">
					<div className="bg-white-smoke md:bg-white absolute ml-4 -mt-3 px-1.5">
						<label htmlFor='Full Name' 
						className={`${
								errors.fullname
								  ? "text-warning"
								  : "border-sonic-silver"
							  } block text-sm font-light leading-1`}>Full Name</label>
					</div>
					<div className="w-full">
						<input 
							{...register('fullname')} 
							type='text' 
							name='fullname' 
							id='fullname' 
							placeholder='Please type in...'
							className={`${
								errors.fullname
								  ? "border-warning"
								  : "border-sonic-silver"
							  } w-full border-2 border-black bg-white-smoke md:bg-white block rounded-full px-4 py-3.5 text-dark-grey shadow-sm ring-0 focus:ring-0 hover:ring-0 outline-none placeholder:text-gray-400 sm:text-sm sm:leading-6`}
							/>
					</div>
				</div>
				<div className="mb-6">
					<div className="bg-white-smoke md:bg-white absolute ml-4 -mt-3 px-1.5">
						<label htmlFor='Email' 
						className={`${
							errors.email
							  ? "text-warning"
							  : "border-sonic-silver"
						  } block text-sm font-light leading-1`}
						>
							Email
						</label>
					</div>
					<div className="w-full">
						<input 
							placeholder='Please type in...' 
							{...register('email')} 
							type='text' 
							name='email' 
							id='email' 
							className={`${
								errors.email
								  ? "border-warning"
								  : "border-sonic-silver"
							  } w-full border-2 border-black bg-white-smoke md:bg-white block rounded-full px-4 py-3.5 text-dark-grey shadow-sm ring-0 focus:ring-0 hover:ring-0 outline-none placeholder:text-gray-400 sm:text-sm sm:leading-6`}/>
					</div>
				</div>
				<div className="mb-6">
					<div className="bg-white-smoke md:bg-white absolute ml-4 -mt-3 px-1.5">
						<label 
							htmlFor='phone' 
							className="block text-sm font-light leading-1">
								Mobile
						</label>
					</div>
					<div className="w-full">
						<input 
							{...register('phone')} 
							type='number' 
							name='phone' 
							id='phone' 
							className="border-sonic-silver w-full border-2 border-black bg-white-smoke md:bg-white block rounded-full px-4 py-3.5 text-dark-grey shadow-sm ring-0 focus:ring-0 hover:ring-0 outline-none placeholder:text-gray-400 sm:text-sm sm:leading-6"/>
					</div>
				</div>
				<div className="mb-6">
					<div className="bg-white-smoke md:bg-white absolute ml-4 -mt-3 px-1.5">
						<label 
							htmlFor='password' 
							className={`${
								errors.password
								  ? "text-warning"
								  : "border-sonic-silver"
							  } block text-sm font-light leading-1`}>
								Password
							</label>
					</div>
					<div className="w-full">
						<input 
							placeholder='Please type in...' 
							{...register('password')} 
							type='text' 
							name='password' 
							id='password' 
							className={`${
								errors.password
								  ? "border-warning"
								  : "border-sonic-silver"
							  } w-full border-2 border-black bg-white-smoke md:bg-white block rounded-full px-4 py-3.5 text-dark-grey shadow-sm ring-0 focus:ring-0 hover:ring-0 outline-none placeholder:text-gray-400 sm:text-sm sm:leading-6`}/>
					</div>
				</div>
			</div>
			<div className="w-full flex content-center items-center">
				<div>
					<label className='customCheckbox'>
					<input 
						type="checkbox" 
						checked={checked} 
						name='terms'
						id='terms'
						onChange={() => handleCheckboxChange()} 
						className='hiddenCheckbox' 
					/>
					<span className='customCheckmark'></span>
					</label>
				</div>
				<div className="ml-4 pb-1 text-xs">
					<label> Tick this box to confirm you've read and agreed to our Terms and Privacy Policy.</label>
				</div>
			</div>
			<Footer terms={terms}/>
		</form>
	</div>
	);
};



    