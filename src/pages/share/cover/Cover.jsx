import { Parallax } from 'react-parallax';



const Cover = ({ img, title }) => {
    return (
        <div className='mb-4'>
            <Parallax
                blur={{ min: -50, max: 50 }}
                bgImage={img}
                bgImageAlt="the Cover img"
                strength={-200}
            >
                <div className="hero md:h-[500px]">
                    <div className="hero-overlay  bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl uppercase font-bold">{title}</h1>
                            <p className="mb-5">
                                Provident cupiditate voluptatem et in. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                        </div>
                    </div>
                </div>
            </Parallax>
        </div>
    );
};

export default Cover;