type Props = {
    align?: 'center' | 'left'
}

function AcheivementCardSection({ align = 'left' }: Props) {
    const outerWrapperClass = `flex flex-col gap-15 max-w-[90%] w-full mx-auto py-20 ${align === 'center' ? 'items-center text-center' : 'items-start text-left'}`
    const headingContainerClass = `max-w-[80%] ${align === 'center' ? 'text-center flex flex-col items-center gap-7' : 'text-left flex flex-col items-start gap-7'}`

    return (
        <>
            <div className={outerWrapperClass}>
                <div className={headingContainerClass}>
                    <h3 className="text-mainBlue font-bold text-4xl">Work Reference</h3>
                    <p className="">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a </p>
                </div>
            </div>

            {/* Full-bleed scroller (spans viewport) */}
            <div className="w-full">
                <div className="snap-x snap-mandatory overflow-x-auto overflow-y-hidden scroll-pl-25 pl-25 flex gap-6 py-4 w-full max-w-full min-w-0 hide-scrollbar">
                    <div className="snap-start flex-shrink-0 w-[640px] h-[442px] rounded-3xl overflow-hidden relative">
                        <img src="/images/work-reference-01.png" alt="Work reference 1" className="object-cover w-full h-full" />
                        <div className="absolute left-5 bottom-5 text-start w-full max-w-[70%]">
                            <h4 className="text-mainBlue text-2xl font-bold">IT is a long</h4>
                            <p className="text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking </p>
                        </div>
                    </div>
                    <div className="snap-start flex-shrink-0 w-[640px] h-[442px] rounded-3xl overflow-hidden relative">
                        <img src="/images/work-reference-01.png" alt="Work reference 2" className="object-cover w-full h-full" />
                        <div className="absolute left-5 bottom-5 text-start w-full max-w-[70%]">
                            <h4 className="text-mainBlue text-2xl font-bold">IT is a long</h4>
                            <p className="text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking </p>
                        </div>
                    </div>
                    <div className="snap-start flex-shrink-0 w-[640px] h-[442px] rounded-3xl overflow-hidden relative">
                        <img src="/images/work-reference-01.png" alt="Work reference 3" className="object-cover w-full h-full" />
                        <div className="absolute left-5 bottom-5 text-start w-full max-w-[70%]">
                            <h4 className="text-mainBlue text-2xl font-bold">IT is a long</h4>
                            <p className="text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking </p>
                        </div>
                    </div>
                    <div className="snap-start flex-shrink-0 w-[640px] h-[442px] rounded-3xl overflow-hidden relative">
                        <img src="/images/work-reference-01.png" alt="Work reference 4" className="object-cover w-full h-full" />
                        <div className="absolute left-5 bottom-5 text-start w-full max-w-[70%]">
                            <h4 className="text-mainBlue text-2xl font-bold">IT is a long</h4>
                            <p className="text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AcheivementCardSection