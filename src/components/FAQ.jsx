import { useState } from 'react';
import { IoCaretDownCircle, IoCaretUpCircle } from 'react-icons/io5';

const FAQ = () => {
	const [faq1, setFaq1] = useState(false);
	const [faq2, setFaq2] = useState(false);
	const [faq3, setFaq3] = useState(false);
	const [faq4, setFaq4] = useState(false);

	return (
		<div className="w-full flex justify-center">
			<div className="w-[80vw] flex">
				<div className="w-1/2 flex flex-col justify-start">
					<div className="text-[#2D83EE] text-sm font-semibold">
						FAQ
					</div>
					<div className="text-2xl font-semibold w-1/2 my-4">
						Frequently Asked Questions
					</div>
					<div className="text-sm w-3/4">
						Visit our help center to clear out any second thoughts
						that you may have regarding our services.
					</div>
					<div className="mt-6 border-0 drop-shadow-lg bg-gradient-to-r from-[#4F37EE] to-[#7184FD] text-white px-6 py-1 max-w-min whitespace-nowrap rounded-md cursor-pointer">
						Contact Us
					</div>
				</div>
				<div className="w-1/2 border rounded-md border-[#2D83EE]">
					<div className="border-b border-[#2D83EE] p-4 rounded-md">
						<div className="flex justify-between">
							<div className="text-base font-semibold">
								What is smart contract security?
							</div>
							<div
								onClick={() => setFaq1(!faq1)}
								className="flex justify-center items-center rounded-full cursor-pointer"
							>
								{faq1 ? (
									<IoCaretUpCircle
										color="#2D83EE"
										size={20}
									/>
								) : (
									<IoCaretDownCircle
										color="#2D83EE"
										size={20}
									/>
								)}
							</div>
						</div>
						{faq1 && (
							<div className="text-sm mt-3">
								Smart Contract Security is a set of best
								practices to identify bugs & vulnerabilities in
								the code that can lead to security breaches.
								These loopholes have lead to huge financial
								losses recently.
							</div>
						)}
					</div>
					<div className="border-b border-[#2D83EE] p-4 rounded-md">
						<div className="flex justify-between">
							<div className="text-base font-semibold">
								Are smart contracts vulnerable?
							</div>
							<div
								onClick={() => setFaq2(!faq2)}
								className="flex justify-center items-center rounded-full cursor-pointer"
							>
								{faq2 ? (
									<IoCaretUpCircle
										color="#2D83EE"
										size={20}
									/>
								) : (
									<IoCaretDownCircle
										color="#2D83EE"
										size={20}
									/>
								)}
							</div>
						</div>
						{faq2 && (
							<div className="text-sm mt-3">
								Smart Contract Security is a set of best
								practices to identify bugs & vulnerabilities in
								the code that can lead to security breaches.
								These loopholes have lead to huge financial
								losses recently.
							</div>
						)}
					</div>
					<div className="border-b border-[#2D83EE] p-4 rounded-md">
						<div className="flex justify-between">
							<div className="text-base font-semibold">
								What is a smart contract audit?
							</div>
							<div
								onClick={() => setFaq3(!faq3)}
								className="flex justify-center items-center rounded-full cursor-pointer"
							>
								{faq3 ? (
									<IoCaretUpCircle
										color="#2D83EE"
										size={20}
									/>
								) : (
									<IoCaretDownCircle
										color="#2D83EE"
										size={20}
									/>
								)}
							</div>
						</div>
						{faq3 && (
							<div className="text-sm mt-3">
								Smart Contract Security is a set of best
								practices to identify bugs & vulnerabilities in
								the code that can lead to security breaches.
								These loopholes have lead to huge financial
								losses recently.
							</div>
						)}
					</div>
					<div className=" border-[#2D83EE] p-4 rounded-md">
						<div className="flex justify-between">
							<div className="text-base font-semibold">
								Why do smart contracts fail?
							</div>
							<div
								onClick={() => setFaq4(!faq4)}
								className="flex justify-center items-center rounded-full cursor-pointer"
							>
								{faq4 ? (
									<IoCaretUpCircle
										color="#2D83EE"
										size={20}
									/>
								) : (
									<IoCaretDownCircle
										color="#2D83EE"
										size={20}
									/>
								)}
							</div>
						</div>
						{faq4 && (
							<div className="text-sm mt-3">
								Smart Contract Security is a set of best
								practices to identify bugs & vulnerabilities in
								the code that can lead to security breaches.
								These loopholes have lead to huge financial
								losses recently.
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default FAQ;
