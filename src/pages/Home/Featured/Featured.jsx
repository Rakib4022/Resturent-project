
import featuredImg from '../../../assets/home/featured.jpg'
import SectionTitle from '../../share/Sectiontitle/SectionTitle';
import '../Featured/Featured.css'

const Featured = () => {
    return (
        <div className='featured-img bg-fixed text-white py-8'>
            <SectionTitle
            heading={'FROM OUR MENU'}
            subheading={'Check it out'}
            ></SectionTitle>
            <div className='md:flex gap-4 items-center bg-slate-500 bg-opacity-60 py-10 md:px-12 justify-center'>
                <img className='w-[480px] p-4 h-[300px]' src={featuredImg} alt="" />
                <div className='w-1/2 mx-auto '>
                    <h2 className="text-xl">March 20, 2023</h2>
                    <h2 className="text-xl">WHERE CAN I GET SOME?</h2>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                    Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. <br />
                     Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
                    </p>
                    <button className="btn btn-outline bg-gray-500 text-red-500 border-0 border-b-2">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;