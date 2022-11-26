import { GoMail } from 'react-icons/go';
import { BiChevronDown } from 'react-icons/bi';

import QuillHashFooter from '../images/QuillHashFooter.svg';
import UkFlag from '../images/uk_flag@2x.png';
import JpnFlag from '../images/jpnFlag@2x.png';
import ChinaFlag from '../images/Flag-China@2x.png';
import FbLogo from '../images/fb-logo@2x.png';
import TwitterLogo from '../images/twitter-logo@2x.png';
import LinkedinLogo from '../images/linkedin-logo@2x.png';
import InstaLogo from '../images/instagram-logo@2x.png';
import TelegramLogo from '../images/telegram-logo@2x.png';
import RedditLogo from '../images/redit-logo@2x.png';
import MLogo from '../images/m-logo@2x.png';
import DiscordLogo from '../images/discord-logo@2x.png';
import YTLogo from '../images/yt_logo@2x.png';

const Footer = () => {
	return (
		<div className="w-full bg-[#28293E] flex flex-col justify-center items-center">
			<div className="w-[80vw] text-white flex my-6 gap-8 text-sm">
				<div className="w-1/4">
					<div className="font-bold">Parent Company</div>
					<div className="h-10 w-36 flex mt-3">
						<img src={QuillHashFooter} alt="" />
					</div>
					<div className="my-3">
						Quillhash delivers enterprise grade blockchain
						technology to leading companies worldwide.
					</div>
					<div className="bg-white text-black px-3 py-1 flex gap-3 max-w-min items-center">
						<div className="h-auto w-10">
							<img src={UkFlag} alt="" className="" />
						</div>
						<div>ENG</div>
						<div className="cursor-pointer">
							<BiChevronDown />
						</div>
					</div>
					<div className="flex p-3 gap-3">
						<div className="h-auto w-10">
							<img src={JpnFlag} alt="" className="" />
						</div>
						<div className="h-auto w-10">
							<img src={ChinaFlag} alt="" className="" />
						</div>
					</div>
				</div>
				<div className="w-2/4">
					<div className="flex">
						<div className="w-1/2">
							<div className="font-bold">Explore</div>
							<div className="my-3 leading-6">
								<span>Careers</span>
								<br />
								<span>Courses</span>
								<br />
								<span>Blockchain Security CTF</span>
								<br />
								<span>QuillAudits Partner Program</span>
								<br />
								<span>Referral Program</span>
							</div>
						</div>
						<div className="w-1/2">
							<div className="font-bold">Services</div>
							<div className="my-3 leading-6">
								<span>Smart Contract Auditing</span>
								<br />
								<span>Blockchain Pen Testing</span>
								<br />
								<span>Due Diligence</span>
								<br />
							</div>
						</div>
					</div>
					<div className="flex justify-center flex-col items-center my-6">
						<div className="font-bold text-base">
							Join our Journey
						</div>
						<div className="flex gap-2 mt-4">
							<div className="h-10 w-10 cursor-pointer">
								<img src={FbLogo} alt="" />
							</div>
							<div className="h-10 w-10 cursor-pointer">
								<img src={TwitterLogo} alt="" />
							</div>
							<div className="h-10 w-10 cursor-pointer">
								<img src={LinkedinLogo} alt="" />
							</div>
							<div className="h-10 w-10 cursor-pointer">
								<img src={InstaLogo} alt="" />
							</div>
							<div className="h-10 w-10 cursor-pointer">
								<img src={TelegramLogo} alt="" />
							</div>
							<div className="h-10 w-10 cursor-pointer">
								<img src={RedditLogo} alt="" />
							</div>
							<div className="h-10 w-10 cursor-pointer">
								<img src={MLogo} alt="" />
							</div>
							<div className="h-10 w-10 cursor-pointer">
								<img src={DiscordLogo} alt="" />
							</div>
							<div className="h-10 w-10 cursor-pointer">
								<img src={YTLogo} alt="" />
							</div>
						</div>
					</div>
				</div>
				<div className="w-1/4">
					<div className="font-bold">Contact Us</div>
					<div className="my-4">
						LG 006, DLF Grand Mall, Mehrauli Gurgaon Road, Near
						Sikanderpur DLF Phase1, Sector 28, Gurugram, Haryana -
						122002
					</div>
					<div className="flex items-center">
						<span className="inline-block pr-2">
							<GoMail />
						</span>
						<span className="underline cursor-pointer">
							contact@quillaudits.com
						</span>
					</div>
				</div>
			</div>
			<div className="my-3 text-sm text-[#DFDFDF] text-center border-t border-slate-700 w-full pt-3">
				All Rights Reserved. © Copyright 2022. QuillHash Technologies
				Private Limited
			</div>
		</div>
	);
};

export default Footer;
