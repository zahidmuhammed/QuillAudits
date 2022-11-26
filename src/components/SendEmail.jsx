import { useState } from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs';

import EmailLogo from '../images/sendMail.svg';
import HashingBits from '../images/HashingBits.svg';

const SendEmail = () => {
	const [submitMail, setSubmitMail] = useState(false);
	return (
		<div className="w-full relative flex justify-center bg-[#15306F] text-white">
			<div className="w-[80vw] flex">
				<div className="w-1/2 py-6">
					<div className="w-60 h-14 flex">
						<img src={HashingBits} alt="" />
					</div>
					<div className="text-sm opacity-70 my-6">
						DeFi & NFT Hacks, CTFs, and Blockchain Security Insights
						Straight to your Inbox.
						<br />
						<br />
						Explore our weekly newsletter: HashingBits. Stay updated
						on everything we’re publishing. Stand a step ahead.
					</div>
					<div className="text-sm">
						<input
							type="text"
							className="bg-[#0000004D] text-slate-300 outline-0 w-2/3 py-2 px-6 rounded-md"
							placeholder="youremail@gmail.com"
							onFocus={() => {
								setSubmitMail(false);
							}}
							onBlur={() => {
								setSubmitMail(true);
							}}
						/>
					</div>
					{submitMail && (
						<div className="text-sm my-2 flex">
							<span className="inline-block pr-3 flex items-center">
								<BsFillCheckCircleFill
									size={16}
									color="green"
								/>
							</span>
							Your email has been successfully registered,
							headlines will be sent to you soon.
						</div>
					)}
				</div>
				<div className="w-1/2 flex justify-end items-center">
					<div className="h-36 w-36">
						<img src={EmailLogo} alt="" />
					</div>
				</div>
			</div>
			<div className="absolute top-1/2 right-0 h-auto w-auto opacity-10 transform -translate-y-1/2">
				<div className="flex items-center">
					<img src={EmailLogo} alt="" />
				</div>
			</div>
		</div>
	);
};

export default SendEmail;
