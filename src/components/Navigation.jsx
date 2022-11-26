import { AiFillCaretDown } from 'react-icons/ai';
import Logo from '../images/Quill_audits_logo.svg';

const Navigation = () => {
	return (
		<div className="fixed flex justify-center items-center drop-shadow-md z-10 bg-[#15306F] w-full text-white h-16">
			<div className="flex items-center w-[80vw] justify-between">
				<div className="flex items-center h-20 w-28">
					<img src={Logo} alt="" />
				</div>
				<div className="flex items-center gap-8 text-sm">
					<div className="cursor-pointer flex items-center gap-2 hover:opacity-70">
						Audit Services{' '}
						<span>
							<AiFillCaretDown size={10} />
						</span>
					</div>
					<div className="cursor-pointer hover:opacity-70">
						Pricing
					</div>
					<div className="cursor-pointer hover:opacity-70">Blogs</div>
					<div className="cursor-pointer hover:opacity-70 flex items-center gap-2">
						Resources
						<span>
							<AiFillCaretDown size={10} />
						</span>
					</div>
					<div className="border-0 drop-shadow-lg bg-gradient-to-r from-[#4F37EE] to-[#7184FD] px-6 py-1 rounded-md cursor-pointer">
						Portfolio
					</div>
					<div className="border-0 drop-shadow-lg bg-gradient-to-r from-[#4F37EE] to-[#7184FD] px-6 py-1 rounded-md cursor-pointer">
						Request An Audit
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navigation;
