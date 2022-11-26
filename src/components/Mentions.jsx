import Cointelligence from '../images/ctofficial-1280x720@x.png';
import ProductHunt from '../images/Product_Hunt_Logo.png';
import MoneyControl from '../images/Mask@new.png';
import CoinCrunch from '../images/Coincrunch_logo_640_416@2x.png';
import Hackernoon from '../images/hn-logo@2x.png';
import InvestBC from '../images/Invest-in-Blockchain-web-logo-copy-4@2x.png';

const Mentions = () => {
	return (
		<div className="w-full flex justify-center">
			<div className="w-[80vw] flex flex-col items-center justify-center">
				<div className="text-[#2D83EE] text-sm font-semibold">
					MENTIONS
				</div>
				<div className="text-2xl font-semibold mt-3 mb-8">
					As Featured In
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<div className="h-40 w-full px-3 border border-[#2D83EE] rounded-md drop-shadow-lg flex flex-col items-center justify-around">
						<div className="h-10 w-2/3 mt-4 flex justify-center items-center">
							<img src={Cointelligence} alt="" />
						</div>
						<div className="text-[#2D83EE] text-sm font-semibold cursor-pointer">
							Read More
						</div>
					</div>

					<div className="h-40 w-full px-3 border border-[#2D83EE] rounded-md drop-shadow-lg flex flex-col items-center justify-around">
						<div className="h-10 w-2/3 mt-4 flex justify-center items-center">
							<img src={ProductHunt} alt="" />
						</div>
						<div className="text-[#2D83EE] text-sm font-semibold cursor-pointer">
							Read More
						</div>
					</div>
					<div className="h-40 w-full px-3 border border-[#2D83EE] rounded-md drop-shadow-lg flex flex-col items-center justify-around">
						<div className="h-10 w-2/3 mt-4 flex justify-center items-center">
							<img src={MoneyControl} alt="" />
						</div>
						<div className="text-[#2D83EE] text-sm font-semibold cursor-pointer">
							Read More
						</div>
					</div>
					<div className="h-40 w-full px-3 border border-[#2D83EE] rounded-md drop-shadow-lg flex flex-col items-center justify-around">
						<div className="h-10 w-2/3 mt-4 flex justify-center items-center">
							<img src={CoinCrunch} alt="" />
						</div>
						<div className="text-[#2D83EE] text-sm font-semibold cursor-pointer">
							Read More
						</div>
					</div>
					<div className="h-40 w-full px-3 border border-[#2D83EE] rounded-md drop-shadow-lg flex flex-col items-center justify-around">
						<div className="h-10 w-2/3 mt-4 flex justify-center items-center">
							<img src={Hackernoon} alt="" />
						</div>
						<div className="text-[#2D83EE] text-sm font-semibold cursor-pointer">
							Read More
						</div>
					</div>
					<div className="h-40 w-full px-3 border border-[#2D83EE] rounded-md drop-shadow-lg flex flex-col items-center justify-around">
						<div className="h-10 w-2/3 mt-4 flex justify-center items-center">
							<img src={InvestBC} alt="" />
						</div>
						<div className="text-[#2D83EE] text-sm font-semibold cursor-pointer">
							Read More
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Mentions;
