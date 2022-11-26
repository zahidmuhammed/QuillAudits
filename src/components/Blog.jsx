import BlogImage from '../images/blogPost@2x.png';

const Blog = () => {
	return (
		<div className="w-full flex justify-center mt-20">
			<div className="w-[80vw]">
				<div className="text-[#2D83EE] text-sm font-semibold my-2">
					OUR BLOG
				</div>
				<div className="flex justify-between">
					<div className="text-xl font-semibold">
						Catch up on the news
					</div>
					<div className="border-0 flex items-center drop-shadow-lg bg-gradient-to-r from-[#4F37EE] to-[#7184FD] text-white px-6 py-1 max-w-min whitespace-nowrap rounded-md cursor-pointer">
						Read More
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-20 my-4">
					<div>
						<div>
							<img src={BlogImage} alt="" />
						</div>
						<div className="text-[#2D83EE] font-semibold my-3">
							Web3 Security: Classification & Analysis of Web3
							Hacks
						</div>
						<div className="text-sm">15 Mar, 2023</div>
						<div className="text-sm mt-3">
							At every point in time, the internet keeps changing
							dimensions to solve the shortcoming of the previous
							version.
						</div>
					</div>
					<div>
						<div>
							<img src={BlogImage} alt="" />
						</div>
						<div className="text-[#2D83EE] font-semibold my-3">
							Web3 Security: Classification & Analysis of Web3
							Hacks
						</div>
						<div className="text-sm">15 Mar, 2023</div>
						<div className="text-sm mt-3">
							At every point in time, the internet keeps changing
							dimensions to solve the shortcoming of the previous
							version.
						</div>
					</div>
					<div>
						<div>
							<img src={BlogImage} alt="" />
						</div>
						<div className="text-[#2D83EE] font-semibold my-3">
							Web3 Security: Classification & Analysis of Web3
							Hacks
						</div>
						<div className="text-sm">15 Mar, 2023</div>
						<div className="text-sm mt-3">
							At every point in time, the internet keeps changing
							dimensions to solve the shortcoming of the previous
							version.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blog;
