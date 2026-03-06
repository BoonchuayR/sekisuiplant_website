import React from "react";

const Footer: React.FC = () => {
	const year = new Date().getFullYear();
	return (
		<footer className="border-t border-gray-200 mt-8 bg-mainBlue">
			<div className="max-w-5xl mx-auto p-8 flex justify-between items-start gap-4 flex-wrap">
				<div>
					<h3 className="m-0 text-base font-bold text-white">CompanyName</h3>
					<p className="mt-2 text-white">Building quality products and services since 20XX.</p>
				</div>
				<div>
					<h4 className="m-0 text-sm font-semibold text-white">Contact</h4>
					<address className="not-italic mt-2 text-white text-sm">
						1234 Street Name<br />
						City, Country<br />
						<a href="mailto:hello@company.com" className="text-white hover:underline">hello@company.com</a>
					</address>
				</div>
				<div className="min-w-[160px]">
					<p className="m-0 text-sm text-white">&copy; {year} CompanyName. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

