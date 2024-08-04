import React from 'react'
import Header from './ui/Header'
function About() {
    return (
     <>
        <section id="about" className="mt-12 py-8  ">
      <div className="w-full bg-transparent h-16 mb-12"></div>
            
        <div className='bg-transparent shadow rounded-lg p-5 transform transition-transform duration-300 hover:scale-105'>
          
        <div className="text-center">
              <h1 className="text-[50px] text-white max-w-2xl mx-auto mb-3 ">About Me</h1>
            </div>
            
            <div className="text-center">
             
              <p className="text-white text-center md:text-[18px] lg:text-[18px] md: w-[50%] md:flex md:justify-center  md: mx-auto md:text-center lg:text-center  gap-2">
               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est corporis iusto animi aliquid sunt, dignissimos repellat esse quasi eaque, deserunt minima enim eveniet accusamus dolores possimus molestiae! Sed excepturi dolor amet? Consectetur, aliquam ut voluptatum cumque dolore quas unde vero fuga, delectus reprehenderit facilis vel impedit magnam voluptas aspernatur deleniti!
              </p>
              
            </div>
        </div>
          </section>
    
     </>
    )
}

export default About