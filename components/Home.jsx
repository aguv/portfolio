import React from 'react'
import Navbar from '../components/Navbar';
import ReactTypingEffect from 'react-typing-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import utils from '../utils';

const Home = () => {
    const myTransition = utils.transition;

    return (
        <div className='shadow-xl font-mono'>
            <Navbar />
            <div className='xl:w-9/12 mx-auto h-screen p-10 xl:px-40 flex flex-col justify-evenly text-gray-200'>
                <div className='flex flex-col items-center lg:flex-row text-5xl lg:justify-evenly'>
                    <img src='/gamer.svg' className='md:w-3/12 w-4/12 lg:mr-10 mb-20 lg:mb-0 hidden md:block'/>
                    <div className='flex flex-col'>
                        <div className='flex mb-4 justify-end'>
                            <a href='https://github.com/aguv'>
                            <FontAwesomeIcon icon={faGithub} className={`w-12 hover:text-purple-400 mr-4 ${myTransition}`}/>
                            </a>
                            <a href='https://www.linkedin.com/in/aguvazquez912/'>
                                <FontAwesomeIcon icon={faLinkedin} className={`w-12 hover:text-blue-400 ${myTransition}`}/>
                            </a>
                        </div>
                        <p className='lg:text-5xl sm:text-3xl md:text-4xl lg:text-center text-right'>Agustín Vazquez</p>
                        <hr className='mt-5'/>
                        <ReactTypingEffect 
                            text={['Buenos Aires']}
                            className='text-red-200'
                            typingDelay={1000}
                            cursorClassName='invisible'
                            className='my-5 text-red-200 text-right lg:text-5xl md:text-4xl sm:text-3xl'
                        />
                        <ReactTypingEffect 
                            text={['Argentina']}
                            className='text-red-200 text-right lg:text-5xl md:text-4xl sm:text-3xl'
                            typingDelay={3000}
                            cursorClassName='invisible'
                        />
                    </div>
                </div>
                <div className='text-justify items-center italic text-md lg:text-xl mb-10 flex flex-col'> 
                    <p>"I fix things now and then, more often tweak HTML and make scripts to do things..."</p>
                    <p className='self-end not-italic text-red-200 font-bold mt-3'>Dennis Ritchie</p>
                </div>
            </div>
        </div>
    )
}

export default Home
