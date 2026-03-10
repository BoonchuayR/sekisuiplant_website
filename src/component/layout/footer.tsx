"use client";
import React from "react";
import { useTranslations } from "next-intl";

const Footer: React.FC = () => {
	const year = new Date().getFullYear();
	const t = useTranslations("footer");
	return (
		<footer className="border-t border-gray-200 bg-mainBlue">
			<div className="max-w-[90%] mx-auto p-8 flex justify-center items-center text-white text-sm">
				<span>Copyright © 2021 SEKISUI PLANT (THAILAND) CO., LTD. All Rights Reserved.</span>
			</div>
		</footer>
	);
};

export default Footer;

