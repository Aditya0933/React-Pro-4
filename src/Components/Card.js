import {FaQuoteLeft,FaQuoteRight} from 'react-icons/fa'
const Card =(props)=>{
    let review = props.review
    return(
        <div className='flex flex-col md:relative'>
            <div className='absolute top-[-7rem] z-[10] mx-auto'>
                <img className='aspect-square rounded-full w-[140px] h-[140px] z-[100]' src={review.image}></img>
                {/* <div className='aspect-square rounded-full w-[140px] h-[140px] bg-black absolute top-[-6px] right-[-6px]'></div> */}
            </div>
            <div className='text-center mt-7'>
                <p className='tracking-wider font-bold text-2xl'>{review.name}</p>       
                <p className='text-violet-300 uppercase text-sm'>{review.job}</p>        
            </div>
            <div className='text-center mt-5 text-violet-300 mx-auto'>
                <FaQuoteLeft/>
            </div>
            <div className='text-center mt-4 text-slate-500 '>
                <p>{review.text}</p>
            </div>
            <div className='text-center mt-5 text-violet-300 mx-auto'>
            <FaQuoteRight/>
            </div>
        </div>
    )
}
export default Card;