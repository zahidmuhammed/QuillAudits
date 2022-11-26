import Lottie from 'react-lottie-player';
import HomeAnime from '../animations/81943.json';

const Section1 = () => {
	return (
		<div className="h-screen bg-[#15306F] text-white">
			<div className="flex flex-col items-center justify-center h-screen">
				<div className="flex items-center">
					<div className="w-[50vw] px-20">
						<div className="text-4xl py-6">
							Emerging Web3 Ventures Trust Our Smart Contract
							Audits & Diligence Services
						</div>
						<div className="text-2xl">
							QuillAudits, Making web3 a safer place
						</div>
						<div className="flex gap-4 py-6">
							<div className="border-0 bg-gradient-to-r from-[#4F37EE] to-[#7184FD] drop-shadow-lg flex justify-center items-center rounded-lg text-sm py-3 px-10 cursor-pointer">
								Request Free Quote
							</div>
							<div className="bg-[#132D6B] border-[#2D83EE] drop-shadow-lg flex  justify-center items-center border text-sm rounded-lg py-3 px-10 cursor-pointer">
								Explore Services
							</div>
						</div>
					</div>
					<div className="w-[40vw] flex justify-center">
						<Lottie
							loop
							animationData={HomeAnime}
							play
							style={{ width: 300, height: 300 }}
						/>
					</div>
				</div>
				<div className="flex justify-between w-[78vw] pt-8">
					<div className="flex items-center gap-3">
						<div className="text-3xl text-[#2D83EE] font-semibold">
							$12.8B
						</div>
						<div className="w-32 text-sm">
							Amount Lost To DeFi Hacks in 2021
						</div>
					</div>
					<div className="flex items-center gap-3">
						<div className="text-3xl text-[#2D83EE] font-semibold">
							600K
						</div>
						<div className="w-36 text-sm">
							Lines of Codes Secured by QuillAudits
						</div>
					</div>
					<div className="flex items-center gap-3">
						<div className="text-3xl text-[#2D83EE] font-semibold">
							$14.6B
						</div>
						<div className="w-32 text-sm">
							Amount Protected By QuillAudits
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Section1;
