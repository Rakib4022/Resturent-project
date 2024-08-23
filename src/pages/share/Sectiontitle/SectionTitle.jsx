


const SectionTitle = ({ subheading, heading }) => {
    return (
        <div> 
            <div className='mb-10 text-center mt-10'>
                <p className='text-center text-[#D99904] mb-6 p-2'>---{subheading}---</p>
                <h2 className="text-3xl uppercase border-y-4 border-slate-300 inline  p-4	">{heading}</h2>
            </div>
        </div>
    );
};

export default SectionTitle;