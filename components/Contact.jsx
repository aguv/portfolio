import React, { useState } from 'react'
import  db  from '../firebase';
import SuccessAlert from './SuccessAlert';
import utils from '../utils';
import myProjects from '../infoprojects';
import emailjs from 'emailjs-com';

const Contact = () => {
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

    const handleSubmit = (e) => {
        e.preventDefault();

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
        }).then( _ => {
                emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE, process.env.NEXT_PUBLIC_TEMPLATEID, e.target, process.env.NEXT_PUBLIC_USERID)
                    .then( _ => {
                        setLoader(false);
                        utils.handleAlert('Submmited', 'Thanks for your time :)', 'bg-green-700 border-green-800', setAlert);
                        setForm({
                            name: '',
                            email: '',
                            message: ''
                        });
                    })
                    .catch(e => console.log(e));
   
            });
    };

    const handleChangeForm = e => {
        setForm(form => ({ ...form, [e.target.name]: e.target.value }))
    }

    return (
        <div className='w-full min-h-screen bg-gray-900 bg-opacity-100 flex 2xl:flex-row flex-col xl:px-60 xl:py-20 px-5 py-10 font-mono'  id='contact'>
            <div className='2xl:w-5/12 lg:w-8/12 w-10/12 bg-gray-600 border-t-4 border-gray-500 flex flex-col self-center 2xl:self-start h-full p-1 md:p-4 mt-2 rounded-sm'>
                <p className='ml-3 text-gray-100 pt-2 md:pt-0'>contact me:</p>
                <hr className='m-2' />
                <form className='flex flex-col w-10/12 mx-auto text-gray-900 mt-1' onSubmit={handleSubmit}>
                    <input type='text' placeholder='name' name='name' className='p-2 shadow-md rounded-md' value={form.name} onChange={handleChangeForm} />
                    <input type='email' placeholder='email' name='email' className='my-2 p-2 rounded-md' value={form.email} onChange={handleChangeForm} />
                    <textarea placeholder='message' name='message' className='h-60 p-2 shadow-md rounded-md' value={form.message} onChange={handleChangeForm} />
                    <input type='submit' value='SEND!' className='bg-red-200 mt-4 rounded-md w-full mx-auto mb-12 p-2 hover:bg-red-300 cursor-pointer' />
                </form>
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
                            <a href={item.git} className='p-2 bg-gray-800 text-xs w-auto self-end text-center hover:bg-red-200 hover:text-red-900 xs:my-2 my-2 md:my-0'>Miralo en GitHub</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Contact
