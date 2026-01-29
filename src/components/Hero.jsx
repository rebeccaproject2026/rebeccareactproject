import './Hero.css';
import vegiBackground from '../assets/images/Background/vegi.jpg';

const Hero = () => {
    return (
        <section className="hero relative">
            <div
                className="absolute inset-0 bg-center bg-cover bg-fixed sm:bg-fixed"
                style={{ backgroundImage: `url(${vegiBackground})` }}
            ></div>
            <div className="hero-banner relative z-10">
                <h2>Product Package of Practices</h2>
            </div>
        </section>
    );
};

export default Hero;