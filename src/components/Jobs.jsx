import JobsLogo from '../images/jobslogo.svg';

const Jobs = () => {
	return (
		<div className="w-full flex justify-center my-12">
			<div className="w-[60vw] flex justify-center">
				<div className="flex bg-[#2D83EE] rounded-xl text-white">
					<div className="w-1/2 p-12 flex flex-col justify-center">
						<div className="text-3xl font-semibold">
							Join Hands With us to secure Web3 Together
						</div>
						<div className="text-sm my-4">
							Help us in our journey to secure web3 by joining our
							team of talented individuals spread across the
							globe.
						</div>
						<div className="bg-white text-[#391400] text-sm mt-6 cursor-pointer max-w-min whitespace-nowrap px-4 py-1 rounded-md drop-shadow-md">
							APPLY NOW!
						</div>
					</div>
					<div className="w-1/2  flex justify-center p-8">
						<div className="h-60 w-60">
							<img src={JobsLogo} alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Jobs;
