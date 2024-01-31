'use client';
import React from 'react';
import clsx from 'clsx';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface InputProps {
	label: string;
	id: string;
	type?: string;
	required?: boolean;
	register: UseFormRegister<FieldValues>;
	errors: FieldErrors;
	disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
	label,
	id,
	type,
	required,
	register,
	errors,
	disabled,
}) => {
	return (
		<>
			<div>
				<label htmlFor={id} className='block text-sm font-medium leading-6'>
					{label}
				</label>
				<div className='mt-2'>
					<input
						id={id}
						type={type}
						autoComplete={id}
						disabled={disabled}
						{...register(id, { required })}
						className={clsx(
							`
              bg-base-100
              form-input
              block
              w-full
              rounded-md
              border-0
              py-1.5
              shadow-sm
              ring-1
              ring-inset
              ring-gray-300
              placeholder:text-gray-400
              focus:ring-2
              focus:ring-inset
              focus:ring-sky-600
              sm:text-sm
              text:leading-6`,
							errors[id] && 'focus:ring-error',
							disabled && 'opacity-50 cursor-default'
						)}
					/>
				</div>
			</div>
		</>
	);
};

export default Input;
