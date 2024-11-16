import ProductCard from '../ProductCard';

const FeaturedProducts = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
    );
};

export default FeaturedProducts;