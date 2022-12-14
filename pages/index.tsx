import Head from 'next/head'
import {BsFillMoonStarsFill} from "react-icons/bs";
import {AiFillLinkedin} from "react-icons/ai"
import {AiFillGithub} from "react-icons/ai"
import Image from "next/image";
import kim from '../public/Photo-me-new.png';
import design from '../public/design.png';
import code from '../public/code.png';
import web1 from '../public/web1.png';
import web2 from '../public/web2.png';
import web3 from '../public/web3.png';
import web4 from '../public/web4.png';
import {useState} from "react"





export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>My portfolio</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-mono dark:text-white'>Developed by Kim</h1>
            <ul className='flex items-center'>
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='cursor-pointer text-2xl dark:text-white'/>
              </li>
              <li>
                <a className='bg-gradient-to-r from-red-700 to-gray-900 
                text-white px-4 py-2 rounded-md ml-8' href='#'>Resume</a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            {/*main page */}
            <h2 className='text-5xl py-2 text-red-700 font-medium md:text-6xl'>Kim Eker</h2>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Developer and designer.</h3>
            <p className='text-md py-5 leading-7 text-gray-900 md:text-xl max-w-xl mx-auto dark:text-white'>
              Looking for a job opportunity in the programming and design field. You can contact me below.
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-5 py-3 text-gray-700 md:gap-10'>
            {/*Anchor tags social */}
            <a href="http://www.linkedin.com/in/kim-eker-257b921b1"><AiFillLinkedin/></a>
            <a href="https://github.com/Kimeker"><AiFillGithub/></a>
          </div>
          <div>
            {/*big image */}
            <Image src={kim} alt="kim" className='relative mx-auto shadow rounded-full mt-20 mb-10 max-w-md'/>
          </div>
        </section>

        <section>
          {/*section 2 */}
          <div>
            <h3 className='text-3xl py-1 dark:text-white'>Services I offer</h3>
            <p className='text-md py-2 leading-8 text-gray-700 dark:text-gray-400'>
              I have always found an interest in computers and are 
              <span className='text-red-700'> working </span>
              every single day to learn new 
              <span className='text-red-700'> skills. </span>
              I would love to get my first job as a 
              <span className='text-red-700'> developer </span>
              and am looking forward to hearing from you.
              </p>
          </div>
          <div className='lg:flex-row'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              {/*cards begin here */}
              <Image src={design} alt="Design" width={100} height={100} className="relative mx-auto"/>
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-white'>Wonderful designs</h3>
              <p className='py-2 max-w-sm mx-auto dark:text-white'>I am making wonderful designs suited for the customers needs.</p>
              <h4 className='py-4 text-red-700'>Design tools i use</h4>
              <p className='text-gray-700 dark:text-gray-400'>Photoshop</p>
              <p className='text-gray-700 dark:text-gray-400'>Figma</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
              {/*card 2 */}
              <Image src={code} alt="Design" width={100} height={100} className="relative mx-auto"/>
              <h3 className='text-lg font-medium pt-8 pb-2 dark:text-white'>Coding</h3>
              <p className='py-2 dark:text-white'>I am a quick learner and I keep the code clean.</p>
              <h4 className='py-4 text-red-700'>Languages I know</h4>
              <p className='text-gray-700 dark:text-gray-400'>C# | <b>basic</b></p>
              <p className='text-gray-700 dark:text-gray-400'>HTML | <b>intermediate</b></p>
              <p className='text-gray-700 dark:text-gray-400'>CSS | <b>intermediate</b></p>
              <p className='text-gray-700 dark:text-gray-400'>Javascript including react.js | <b>intermediate</b></p>
              <p className='text-gray-700 dark:text-gray-400'>python | <b>basic</b></p>
            </div>
          </div>
        </section>

        <section>
          {/* section 3 | dark mode and optimazation */}
          <div>
            <h3 className='text-3xl py-1 dark:text-white'>Portfolio</h3>
            <p className='text-md py-2 leading-8 text-gray-700 dark:text-gray-400'>
               Since I started my coding journey as a designer and developer i've done
               multiple
              <span className='text-red-700'> projects </span>
              which you can find below.
              </p>
          </div>
          <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
            <div className='basis-1/2 flex-1'>
              {/* images */}
              <Image src={web1} alt="image1" className='rounded-lg object-cover w-100% h-100%' layout="responsive"/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web2} alt="image2" className='rounded-lg object-cover w-100% h-100%' layout="responsive"/>
            </div>
            <div className='basis-1/3 flex-1'>
              <Image src={web3} alt="image3" className='rounded-lg object-cover w-100% h-100%' layout="responsive"/>
            </div>
            <div className='basis-1/2 flex-1'>
              <Image src={web4} alt="image4" className='rounded-lg object-cover w-100% h-100%' layout="responsive"/>
            </div>
          </div>
        </section>
      </main>
  </div>
  )
}
