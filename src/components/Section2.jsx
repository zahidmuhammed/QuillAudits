import Lottie from 'react-lottie-player';
import { GiFeather } from 'react-icons/gi';
import { FaEthereum } from 'react-icons/fa';

import Pathfund from '../images/pathfund.png';
import Slide1 from '../animations/21811.json';
import Slide2 from '../animations/19172.json';
import Slide3 from '../animations/92805.json';
import Web3Path from '../images/Group_42280@2x.png';

const Section2 = () => {
	return (
		<div className="flex justify-center w-full">
			<div className="w-[80vw]">
				<div className="pt-12">
					<div className="text-[#2D83EE] text-sm font-semibold">
						CLIENTS
					</div>
					<div className="text-[#391400] text-2xl font-semibold pt-2 pb-4">
						Partners
					</div>
					<div className="grid grid-cols-2 md:flex justify-between">
						<div className="h-20 w-28">
							<img src={Pathfund} alt="" />
						</div>
						<div className="h-20 w-28">
							<img src={Pathfund} alt="" />
						</div>
						<div className="h-20 w-28">
							<img src={Pathfund} alt="" />
						</div>
						<div className="h-20 w-28">
							<img src={Pathfund} alt="" />
						</div>
						<div className="h-20 w-28">
							<img src={Pathfund} alt="" />
						</div>
						<div className="h-20 w-28">
							<img src={Pathfund} alt="" />
						</div>
					</div>
				</div>
				<div className="flex flex-col md:flex-row my-16">
					<div className="md:w-1/2 flex justify-center items-center">
						<Lottie
							loop
							animationData={Slide1}
							play
							style={{ width: 350, height: 350 }}
						/>
					</div>
					<div className="md:w-1/2 flex flex-col justify-center">
						<div className="text-[#2D83EE] text-sm font-semibold">
							SERVICE
						</div>
						<div className="text-[#391400] text-2xl font-semibold my-2">
							Smart Contract Auditing
						</div>
						<div className="text-[#391400] text-sm w-2/3">
							Our Audit Process for smart contract is based on the
							comprehensive approach we follow to investigate the
							code for security flaws and potential
							vulnerabilities.
						</div>
						<div className="text-[#391400] text-sm my-3 ">
							<FaEthereum className="inline-block mr-1" />
							Ethereum
							<br />
							<FaEthereum
								color="violet"
								className="inline-block mr-1"
							/>
							Polygon <br />
							<FaEthereum
								color="#F9CC11"
								className="inline-block mr-1"
							/>
							BSC <br />
							<FaEthereum
								color="blue"
								className="inline-block mr-1"
							/>
							Solana <br />
							<FaEthereum className="inline-block mr-1" />
							EOS
						</div>
						<div className="cursor-pointer text-sm drop-shadow-md text-white max-w-min py-1 px-10 rounded-md bg-gradient-to-r from-[#4F37EE] to-[#7184FD]">
							Explore
						</div>
					</div>
				</div>
				<div className="flex flex-col md:flex-row my-16">
					<div className="md:w-1/2 order-2 md:order-1 flex flex-col justify-center md:pl-12">
						<div className="text-[#2D83EE] text-sm font-semibold">
							SERVICE
						</div>
						<div className="text-[#391400] text-2xl font-semibold my-2">
							Blockchain Penetration Testing
						</div>
						<div className="text-[#391400] text-sm w-4/5">
							QuillAudits proven strategy to tackle
							vulnerabilities specific to blockchain technology
							comes with a mix-blend of conventional pentesting
							approach and dynamic blockchain analysis.
						</div>
						<div className="cursor-pointer text-sm drop-shadow-md text-white max-w-min mt-6 py-1 px-10 rounded-md bg-gradient-to-r from-[#4F37EE] to-[#7184FD]">
							Explore
						</div>
					</div>
					<div className="md:w-1/2 order-1 md:order-2 flex justify-center items-center">
						<Lottie
							loop
							animationData={Slide2}
							play
							style={{ width: 300, height: 300 }}
						/>
					</div>
				</div>
				<div className="flex flex-col md:flex-col  my-16">
					<div className="md:w-1/2 flex justify-center items-center">
						<Lottie
							loop
							animationData={Slide3}
							play
							style={{ width: 350, height: 350 }}
						/>
					</div>
					<div className="md:w-1/2 flex flex-col justify-center">
						<div className="text-[#2D83EE] text-sm font-semibold">
							SERVICE
						</div>
						<div className="text-[#391400] text-2xl font-semibold my-2">
							Due Diligence
						</div>
						<div className="text-[#391400] text-sm w-2/3">
							QuillAudits acknowledges the significant threats
							involved in smart contracts, which can lead to many
							critical possibilities.
						</div>
						<div className="text-[#391400] text-sm my-3">
							<GiFeather
								color="#527EF5"
								className="inline-block mr-2"
							/>
							DeFi Due Diligence
							<br />
							<GiFeather
								color="#527EF5"
								className="inline-block mr-2"
							/>
							NFT Due Diligence <br />
							<GiFeather
								color="#527EF5"
								className="inline-block mr-2"
							/>
							Rug Pull Due Diligence <br />
						</div>
						<div className="cursor-pointer text-sm drop-shadow-md text-white max-w-min py-1 px-10 rounded-md bg-gradient-to-r from-[#4F37EE] to-[#7184FD]">
							Explore
						</div>
					</div>
				</div>
				<div classname="flex flex-col justify-center items-center w-full">
					<div className="flex justify-center text-[#2D83EE] text-sm font-semibold">
						THE SECURITY
					</div>
					<div className="flex justify-center pt-4 text-[#391400] text-xl font-semibold">
						How We Secure Your Web3 Project
					</div>
					<div className="py-12">
						<img src={Web3Path} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Section2;
