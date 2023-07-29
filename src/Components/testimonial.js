import { useState } from "react";
import Card from "./Card";
import {FiChevronLeft,FiChevronRight } from 'react-icons/fi'
const Testimonial =(propes)=>{
    let review = propes.review
    const[index, setIndex] = useState(0)
    const leftShiftHandler =()=> {
        if(index-1 < 0){
            setIndex(review.length - 1);
        }
        else{
            setIndex(index-1)
        }
    }
    const rightShiftHandler =()=> {
        if(index+1 >= review.length){
            setIndex(0);
        }
        else{
            setIndex(index+1)
        }
    }
    const surpriseShiftHandler =()=> {
        let randomIndex = Math.floor(Math.random()*review.length);
        setIndex(randomIndex)
    }
    return(
        <div className="w-[85vw] md-[700px] bg-white flex flex-col justify-center items-center mt-10 pd-10 transition-all duration-700 hover:shadow-xl rounded-md ">
            <Card review={review[index]}></Card>
            <div className='text-center flex text-3xl mt-10 gap-3 text-violet-400 font-bold'>
                <button onClick={leftShiftHandler} className='cursor-pointer hover:text-violet-500'><FiChevronLeft/></button>
                <button onClick={rightShiftHandler} className='cursor-pointer hover:text-violet-500'><FiChevronRight/></button>
            </div>
            <div className="mt-5">
                <button onClick={surpriseShiftHandler} className='bg-violet-400 hover:bg-violet-600 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg'>Surprise Me</button>
            </div>
        </div>

    )
}
export default Testimonial;