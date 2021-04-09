import {useState, useEffect} from 'react';
import Head from 'next/head';
import Home from '../components/Home';
import Technologies from '../components/Technologies';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { faArrowAltCircleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import utils from '../utils';
import Link from 'next/link'

export default function Index() {
  const myTransition = utils.transition;
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => setScroll(true));
  }, [])

  useEffect(() => {
    if(scroll) {
      setTimeout(() => {
        setScroll(false)
      }, 4000)
    }
  }, [scroll])

  return (
    <div className='min-w-screen min-h-screen'>
        <Head>
                <title>aguv</title>
                <link rel='icon' href='/favicon.ico'/>
        </Head>
        <main className='min-h-screen bg-gray-500' id='main'>
          {scroll ? 
            (
              <Link href='/#main'>
                <a>
                  <FontAwesomeIcon icon={faArrowAltCircleUp} className={`z-50 text-gray-100 w-12 hover:text-red-200 fixed bottom-24 left-10 lg:bottom-24 lg:left-24 ${myTransition}`}/>
                </a>
              </Link>
            ) : null}      
          <Home/>
          <Technologies/>
          <Contact />
          <Footer />
        </main>
    </div>
  )
}
