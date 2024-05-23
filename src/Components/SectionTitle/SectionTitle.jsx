const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8">
            <h3 className="text-3xl text-teal-600 uppercase border-b-4 border-[#042525] py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;