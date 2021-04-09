import React, { useState } from 'react'
import  db  from '../firebase';
import SuccessAlert from './SuccessAlert';
import utils from '../utils';
import Link from 'next/link';
import myProjects from '../infoprojects';

const items = [1, 2, 3, 4];

const Contact = () => {
    const img = 'https://d25rq8gxcq0p71.cloudfront.net/dictionary-images/324/cce97f0f-04fa-4e20-b445-d01157886e29.jpg';

    const myTransition = utils.transition;

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [loader, setLoader] = useState(false);

    const [alert, setAlert] = useState({
        title: '',
        message: '',
        mode: ''
    })

    const handleAddMessage = () => {
        const { name, email, message } = form;
        setLoader(true);

        if (!name.trim() || !email.trim() || !message.trim()) {
            setLoader(false);
            return utils.handleAlert('Error', 'Check your inputs', 'bg-red-500 border-red-700', setAlert);  
        } 

        db.collection("formmessages").add({
            name,
            email,
            message
        }).then(data => {
                setLoader(false);

                if (data) {
                    utils.handleAlert('Submmited', 'Thanks for your time :)', 'bg-green-700 border-green-800', setAlert);
                }

                setForm({
                    name: '',
                    email: '',
                    message: ''
                });
            });
    };

    const handleChangeForm = e => {
        setForm(form => ({ ...form, [e.target.name]: e.target.value }))
    }

    return (
        <div className='w-full min-h-screen bg-gray-900 bg-opacity-100 flex 2xl:flex-row flex-col xl:px-60 xl:py-20 px-5 py-10 font-mono'  id='contact'>
            <div className='2xl:w-5/12 lg:w-8/12 w-10/12 bg-gray-600 border-t-4 border-gray-500 flex flex-col self-center 2xl:self-start h-full p-4 mt-2 rounded-sm'>
                <p className='ml-3 text-gray-100'>contact me:</p>
                <hr className='m-2' />
                <div className='flex flex-col w-10/12 mx-auto text-gray-900 mt-1'>
                    <input type='text' placeholder='name' name='name' className='p-2 shadow-md rounded-md' value={form.name} onChange={handleChangeForm} />
                    <input type='email' placeholder='email' name='email' className='my-2 p-2 rounded-md' value={form.email} onChange={handleChangeForm} />
                    <textarea placeholder='message' name='message' className='h-60 p-2 shadow-md rounded-md' value={form.message} onChange={handleChangeForm} />
                </div>
                <button className='bg-red-200 mt-4 rounded-md w-10/12 mx-auto mb-12 p-2 hover:bg-red-300' onClick={handleAddMessage}>SEND!</button>
                {alert.message ? <SuccessAlert title={alert.title} message={alert.message} color={alert.color} /> : null}
                {loader ? <div className="mx-auto loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div> : null}
            </div>
            <div className='text-gray-100 flex-1 flex flex-col 2xl:items-end items-center'>
                <p className='text-xl 2xl:mt-0 mt-12 2xl:self-end'>projects</p>
                <hr className='border-gray-500 w-6/12 my-2'/>
                {myProjects.map((item, i) => (
                    <div key={i} className={`flex-1 max-h-44 flex xl:w-10/12 2xl:w-10/12 w-full md:w-9/12 lg:w-7/12 bg-gray-600 my-4 border-4 border-gray-700 rounded-b-md ${myTransition}`}>
                        <div className='2xl:w-6/12 xl:w-5/12 w-6/12 hidden sm:block'>
                            <img src={item.img} className='min-w-full h-full'/>
                        </div>
                        <div className='border-l-4 flex flex-col border-gray-500 p-2 w-full sm:w-7/12'>
                            <p>{item.title}</p>
                            <hr className='w-full m-1 border-gray-400'/>
                            <p className='text-xs text-justify flex-1'>{item.description}</p>
                            <a href={item.git} className='p-2 bg-gray-800 text-xs w-auto self-end text-center hover:bg-red-200 hover:text-red-900'>Miralo en GitHub</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Contact
