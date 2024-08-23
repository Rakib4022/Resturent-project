import cefservice from '../../../assets/home/chef-service.jpg';


const CefService = () => {
    return (
        <div className='md:relative items-center flex-col flex'>
            <img src={cefservice} alt="" />
            <div className='bg-white md:p-20 p-10 text-center md:mt-20 lg:left-40  mx-auto md:absolute'>
                <h3 className="text-xl md:text-5xl font-normal">Bistro Boss</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Necessitatibus, libero accusamus laborum <br />deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto <br />
                ducimus incidunt quibusdam nemo.</p>
            </div>
        </div>
    );
};

export default CefService;