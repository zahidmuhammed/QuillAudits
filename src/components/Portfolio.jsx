import {
	CarouselProvider,
	Slider,
	Slide,
	ButtonBack,
	ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Book from '../images/book@2x.png';
import { MdArrowForwardIos, MdArrowBackIos } from 'react-icons/md';

const Portfolio = () => {
	return (
		<div className="w-full bg-[#15306F] flex justify-center text-white">
			<div className="w-[80vw] my-12">
				<div className="flex justify-center flex-col items-center mb-8">
					<div className="text-[#2D83EE] text-sm font-semibold">
						PORTFOLIO
					</div>
					<div className="text-3xl my-3">Latest Work</div>
					<div className="grid grid-cols-2 md:flex gap-4">
						<div className="py-1 text-sm px-4 border border-[#E3E3E3] rounded-full hover:bg-[#2D83EE] hover:border-[#2D83EE] cursor-pointer">
							Ethereum
						</div>
						<div className="py-1 text-sm px-4 border border-[#E3E3E3] rounded-full hover:bg-[#2D83EE] hover:border-[#2D83EE] cursor-pointer">
							Binance SC
						</div>
						<div className="py-1 text-sm px-4 border border-[#E3E3E3] rounded-full hover:bg-[#2D83EE] hover:border-[#2D83EE] cursor-pointer">
							NFT
						</div>
						<div className="py-1 text-sm px-4 border border-[#E3E3E3] rounded-full hover:bg-[#2D83EE] hover:border-[#2D83EE] cursor-pointer">
							Solana
						</div>
					</div>
				</div>
				<CarouselProvider
					naturalSlideWidth={100}
					naturalSlideHeight={110}
					totalSlides={4}
					visibleSlides={3}
					infinite={true}
				>
					<div className="flex justify-between">
						<ButtonBack>
							<MdArrowBackIos size={32} />
						</ButtonBack>
						<ButtonNext>
							<MdArrowForwardIos size={32} />
						</ButtonNext>
					</div>
					<Slider>
						<Slide index={0}>
							<div className="flex flex-col justify-center items-center">
								<div className="md:h-60 md:w-40 flex items-center cursor-grab">
									<img src={Book} alt="" />
								</div>
								<div className="text-base">
									StackOS Audit Report
								</div>
								<div className="flex gap-8 my-2">
									<div className="cursor-pointer border border-[#FFFFFF4B] py-2 px-8 rounded-md text-xs">
										VIEW
									</div>
									<div className="cursor-pointer border border-[#FFFFFF4B] py-2 px-4 rounded-md text-xs">
										DOWNLOAD
									</div>
								</div>
							</div>
						</Slide>
						<Slide index={1}>
							<div className="flex flex-col items-center justify-center ">
								<div className="md:h-60 md:w-40 flex items-center cursor-grab  ">
									<img src={Book} alt="" />
								</div>
								<div className="text-base">
									StackOS Audit Report
								</div>
								<div className="flex gap-8 my-2">
									<div className="cursor-pointer border border-[#FFFFFF4B] py-2 px-8 rounded-md text-xs">
										VIEW
									</div>
									<div className="cursor-pointer border border-[#FFFFFF4B] py-2 px-4 rounded-md text-xs">
										DOWNLOAD
									</div>
								</div>
							</div>
						</Slide>
						<Slide index={2}>
							<div className="flex flex-col items-center justify-center">
								<div className="md:h-60 md:w-40 flex items-center cursor-grab  ">
									<img src={Book} alt="" />
								</div>
								<div className="text-base">
									StackOS Audit Report
								</div>
								<div className="flex gap-8 my-2">
									<div className="cursor-pointer border border-[#FFFFFF4B] py-2 px-8 rounded-md text-xs">
										VIEW
									</div>
									<div className="cursor-pointer border border-[#FFFFFF4B] py-2 px-4 rounded-md text-xs">
										DOWNLOAD
									</div>
								</div>
							</div>
						</Slide>
						<Slide index={3}>
							<div className="flex flex-col items-center justify-center">
								<div className="md:h-60 md:w-40 flex items-center cursor-grab ">
									<img src={Book} alt="" />
								</div>
								<div className="text-base">
									StackOS Audit Report
								</div>
								<div className="flex gap-8 my-2">
									<div className="cursor-pointer border border-[#FFFFFF4B] py-2 px-8 rounded-md text-xs">
										VIEW
									</div>
									<div className="cursor-pointer border border-[#FFFFFF4B] py-2 px-4 rounded-md text-xs">
										DOWNLOAD
									</div>
								</div>
							</div>
						</Slide>
					</Slider>
				</CarouselProvider>
				<div className="flex justify-center pt-10 md:pt-0">
					<div className="border border-[#FFFFFF4B] py-2 px-8 rounded-md text-xs cursor-pointer">
						BUTTON
					</div>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
