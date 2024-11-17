import Banner from '../components/Home/Banner';
import FAQ from '../components/Home/FAQ';
import FeaturedProducts from '../components/Home/FeaturedProducts';
import UserReviews from '../components/Home/UserReviews';

const Home = () => {
    return (
        <div className='space-y-24'>
            
            <section className='flex flex-col items-center'>
                <h2 className='text-2xl mb-6 font-bold text-center'>Featured Products</h2>
                <FeaturedProducts />
            </section>

            <section className='flex flex-col items-center'>
                <h2 className='text-2xl mb-6 font-bold text-center'>Customer Review's</h2>
                <UserReviews />
            </section>

            <section>
                <h2 className='text-2xl mb-6 font-bold text-center'>Frequently Asked Questions</h2>
                <FAQ />
            </section>
        </div>
    );
};

export default Home;