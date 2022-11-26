import StackOS from '../images/StackOS.png';

const Testimonials = () => {
	return (
		<div className="flex w-full justify-center my-12">
			<div className="w-[80vw]">
				<div className="text-[#2D83EE] text-sm font-semibold mb-4">
					TESTIMONIALS
				</div>
				<div className="flex flex-col md:flex-row justify-between">
					<div className="text-2xl font-semibold">
						What our Clients are saying
					</div>
					<div className="border-0 max-w-min whitespace-nowrap drop-shadow-lg bg-gradient-to-r from-[#4F37EE] to-[#7184FD] text-white px-6 py-1 my-2 md:my-0 rounded-md cursor-pointer">
						Read More
					</div>
				</div>
				<div className="my-8 flex flex-col items-center md:flex-row gap-4">
					<div className="md:w-1/3 p-6 flex justify-center items-center flex-col">
						<div className="h-10 w-40">
							<img src={StackOS} alt="" />
						</div>
						<div className="text-center">
							<div className="my-4 text-sm">
								Very professional and timed delivery. Also very
								prompt in responses and queries.
							</div>
							<div className="text-lg font-semibold">
								Vishnu Korde
							</div>
							<div className="text-sm">CEO, StackOS</div>
						</div>
					</div>
					<div className="md:w-1/3 p-6 flex justify-center items-center flex-col">
						<div className="h-10 w-40">
							<img src={StackOS} alt="" />
						</div>
						<div className="text-center">
							<div className="my-4 text-sm">
								Very professional and timed delivery. Also very
								prompt in responses and queries.
							</div>
							<div className="text-lg font-semibold">
								Vishnu Korde
							</div>
							<div className="text-sm">CEO, StackOS</div>
						</div>
					</div>
					<div className="md:w-1/3 p-6 flex justify-center items-center flex-col">
						<div className="h-10 w-40">
							<img src={StackOS} alt="" />
						</div>
						<div className="text-center">
							<div className="my-4 text-sm">
								Very professional and timed delivery. Also very
								prompt in responses and queries.
							</div>
							<div className="text-lg font-semibold">
								Vishnu Korde
							</div>
							<div className="text-sm">CEO, StackOS</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
