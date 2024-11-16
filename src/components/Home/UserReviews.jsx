import ReviewCard from '../ReviewCard';

const UserReviews = () => {
    return (
        <div className='grid grid-cols-3 gap-20'>
            <ReviewCard/>
            <ReviewCard/>
            <ReviewCard/>
            <ReviewCard/>
        </div>
    );
};

export default UserReviews;