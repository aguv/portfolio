import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJsSquare, faReact, faNodeJs, faCss3Alt, faHtml5, faPython } from '@fortawesome/free-brands-svg-icons';
import utils from '../utils';

const Technologies = () => {
    const myTransition = utils.transition;

    return (
        <div className='bg-gray-700 flex flex-col items-center text-gray-100 font-mono' id='tech'>
            <div className='bg-gray-700 2xl:w-6/12 w-full m-40 flex justify-around items-start'>
                <FontAwesomeIcon icon={faJsSquare} className={`w-24 text-yellow-300 hover:text-yellow-600 ${myTransition} mx-2 2xl:mx-0`}/>
                <FontAwesomeIcon icon={faReact} className={`w-28 text-blue-400 hover:text-blue-600 ${myTransition} mx-2 2xl:mx-0`}/>
                <FontAwesomeIcon icon={faNodeJs} className={`w-24 text-green-500 hover:text-green-700 ${myTransition} mx-2 2xl:mx-0`}/>
                <FontAwesomeIcon icon={faCss3Alt} className={`w-24 text-blue-500 hover:text-blue-600 ${myTransition} mx-2 2xl:mx-0`}/>
                <FontAwesomeIcon icon={faHtml5} className={`w-24 text-red-500 hover:text-red-700 ${myTransition} mx-2 2xl:mx-0`}/>
                <FontAwesomeIcon icon={faPython} className={`w-24 text-yellow-400 hover:text-yellow-600 ${myTransition} mx-2 2xl:mx-0`}/>
            </div>
            <div className='flex-1 bg-gray-600 w-full lg:text-xl xl:text-2xl text-md'>
                <div className='bg-gray-700 w-11/12 2xl:w-8/12 rounded-md mx-auto 2xl:my-20 my-16 p-5 text-justify border-4 border-solid border-gray-500 shadow-lg' id='about'>
                    Comencé a programar a finales de 2019 en C, donde introduje los algoritmos y las estructuras de datos. Los meses posteriores me dediqué a aprender a pensar como un programador para luego dedicarme 100% a JavaScript.
                    <hr className='border-gray-500 my-5'/>
                    A principios de 2021 realicé un Coding Bootcamp en <span className='hover:text-red-400 underline'>Plataforma5</span> donde consolidé las bases del desarrollo web. Desde React hasta Node.js, pasando por herramientas como Tailwind, Material-UI, SequelizeORM para bases de datos relacionales (PostgreSQL), Mongoose para las no relacionales (MongoDB), JWT, Passport, OAuth, socket.io, Express.js y Docker. Esta landing page está hecha con Next.js y Firebase.
                </div>
            </div>
        </div>
    )
}

export default Technologies
