'use client';

import { useEffect, useState } from 'react';
import OzSmartImage from '../OzSmartImage';
import { CommonSelectorOption, CommonSelectorProps } from '@/lib/types/CommonSelectorOption';

export default function CommonSelector({
	title,
	options,
	selected,
	onSelected,
}: CommonSelectorProps) {
	const [selectedOption, setSelectedOption] = useState<CommonSelectorOption | null>(null);

	useEffect(() => {
		if (selected)
			setSelectedOption(selected);
	}, [selected]);

	const selectedStyle = `border-teal-600`;

	function cellStyle(option: CommonSelectorOption) {
		return `cursor-pointer border-2 border-gray-300 p-4 m-1 transition duration-300 ease-in-out rounded-md bg-white hover:shadow-lg hover:border-teal-600 ${selectedOption?.value === option.value ? selectedStyle : ''}`
	}

	function handleSelected(option: CommonSelectorOption) {
		if (selectedOption?.value === option.value)
			setSelectedOption(null);
		else {
			setSelectedOption(option);
			if (onSelected)
				onSelected(option);
		}
	}

	return (
		<>
			<h5 className='text-xl flex items-center tracking-tight p-2 font-semibold text-gray-600'>
				{title}
			</h5>
			<div className='flex flex-row flex-wrap'>
				{
					options.map((option) => {
						return (
							<div
								key={option.value}
								className={cellStyle(option)}
								onClick={() => {
									handleSelected(option);
								}}
							>
								<OzSmartImage src={option.image} alt={option.label} width={150} height={150} />
								<div className='text-center mt-2 font-semibold'>
									{option.label}
								</div>

							</div>
						)
					})
				}
			</div>
		</>
	)
}