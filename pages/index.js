import { useState } from "react"
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import {BiLeftArrowAlt} from 'react-icons/bi'
import {FcGoogle} from 'react-icons/fc'

const Home = () => {
  const [page, setPage] = useState(0)
  const [user, setUser] = useState('')
  const [value, setValue] = useState('')


  const handleUserType = (e) => {
    setUser(e.target.value)
    console.log(user)
    setPage((currPage) => currPage + 1)
  }

  const handleFormSubmit = () => {
    window.alert('form submitted, your profile has been registered')
  }
  return (
    <section className='flex font-sans overflow-y-hidden'>
  
      <section className='w-6/12 bg-blue-500 min-h-screen flex items-center justify-center'>
        <p className='text-white font-sans m-12 text-xl'>
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit, ut quis libero earum necessitatibus fugiat dolorum odit veniam dolores. Voluptatum eius sint ipsum facilis tenetur, ipsa rerum repudiandae minima perferendis?"
        </p>
      </section>

      <section className='w-6/12 min-h-screen '>
        {
          (page == 0) &&
          <section className="flex items-center justify-center h-full">
            <form className="flex flex-col">
              <input 
              type="radio" 
              name="user_type" 
              id="indiviual" 
              value='indiviual' 
              className='hidden'
              onClick={(e) => handleUserType(e)}/>

                <label 
                htmlFor="indiviual" 
                className="shadow-lg p-6 m-4 rounded-md border-blue-500 ring-inset hover:border-4 cursor-pointer">
                  <h1 className="text-2xl">
                    Indiviual
                  </h1>
                  <p className="text-xl">
                    personal account to manage your activities
                  </p>
                </label>
              <input 
              type="radio" 
              name="user_type" 
              id="business" 
              value='business' 
              className='hidden' 
              onClick={(e) => handleUserType(e)}/>
                <label 
                htmlFor="business"
                className="shadow-lg p-6 m-4 rounded-md border-blue-500 ring-inset hover:border-4 cursor-pointer">
                  <h1 className="text-2xl">
                    Business
                  </h1>
                  <p className="text-xl">
                    Own or belong to a company, this is for you
                  </p>
                </label>
            </form>
          </section>
        }
        {
          (page >= 0)&&
          <nav className="p-4 flex justify-between items-center">
            <button
            onClick={() => setPage((currPage) => currPage - 1)}
            className='h-10 w-20 hover:bg-gray-300 font-bold text-gray-500 rounded-lg flex items-center justify-center hover:shadow-lg'>
              <BiLeftArrowAlt/>back
            </button>

            <div>
              <h1 className="font-bold text-gray-500">
                STEP 0{page}/03
              </h1>
            </div>
          </nav>
        }
        {
          (page == 1) &&
          <section className=" flex flex-col justify-center items-center">
            <article className="w-3/5 mx-auto my-4">
              <h1 className="font-left text-3xl ">
                Register {user} account
              </h1>
              <p className='text-lg text-gray-500'>
                For purpose of industry regulation your details are required
              </p>
            </article>

            <form className="w-3/5 mx-auto flex flex-col">
              <label htmlFor="name" className='text-lg text-gray-500'>
                full name
              </label>
              <input type="text" 
              name="name" 
              id="name" 
              className="h-12 p-4 border-2 rounded-md border-gray-300 focus:border-blue-400 mb-4"/>

              <label htmlFor="email" className='text-lg text-gray-500'>
                email
              </label>
              <input type="email" 
              name="email" 
              id="email" 
              className="h-12 p-4 border-2 rounded-md border-gray-300 focus:border-blue-400 mb-4"/>

              <label htmlFor="password" className='text-lg text-gray-500'>
                create password
              </label>
              <input 
              type="password" 
              name="password" 
              id="password" 
              className="h-12 p-4 border-2 rounded-md border-gray-300 focus:border-blue-400 mb-4"/>

              <div className="mb-3">
              <input type="checkbox" name="terms" id="terms" />
              <label htmlFor="terms" > I have read terms and condition</label>
              </div>
            </form>

            <button
            onClick={() => (setPage((currPage) => currPage + 1))}
            className='mx-auto w-3/5 rounded-md text-white text-xl bg-blue-500 h-12 hover:shadow-lg'
            >
              Register account
            </button>

            <h1 className='text-lg my-2 text-gray-500'>
              Or 
            </h1>

            <button
            onClick={() => (setPage((currPage) => currPage + 1))}
            className='mx-auto w-3/5 rounded-md  text-xl border-2 border-black h-12 hover:shadow-lg flex items-center justify-evenly'
            >
              <FcGoogle/> Register with google
            </button>
          </section>
        }
        {
          (page == 2)&&
          <section className=" flex flex-col justify-center items-center">
            <article className="w-3/5 mx-auto my-4">
              <h1 className="font-left text-3xl ">
                Register {user} account
              </h1>
              <p className='text-lg text-gray-500'>
                For purpose of industry regulation your details are required
              </p>
            </article>

            <form className="w-3/5 mx-auto flex flex-col">
              <label htmlFor="name" className='text-lg text-gray-500'>
                Phone number
              </label>
              <div className="h-12 p-4 border-2 rounded-md border-gray-300 focus:border-blue-400 mb-4 flex items-center">
              <PhoneInput
              value={value}
              onChange={setValue}/>
              </div>

              <label htmlFor="address" className='text-lg text-gray-500'>
                address
              </label>
              <input type="text" 
              name="address" 
              id="address" 
              className="h-12 p-4 border-2 rounded-md border-gray-300 focus:border-blue-400 mb-4"/>
            </form>

            <button
            onClick={() => (setPage((currPage) => currPage + 1))}
            className='mx-auto w-3/5 rounded-md text-white text-xl bg-blue-500 h-12 hover:shadow-lg'
            >
              save and continue
            </button>
          </section>
        }
        {
          (page == 3) && 
          <section className=" flex flex-col justify-center items-center">
            <article className="w-3/5 mx-auto my-4">
              <h1 className="font-left text-3xl ">
                Complete your profile!
              </h1>
              <p className='text-lg text-gray-500'>
                For purpose of industry regulation your details are required
              </p>
            </article>

            <form className="w-3/5 mx-auto flex flex-col">
              
              <label htmlFor="address" className='text-lg text-gray-500'>
                Bank verification number (BVN)
              </label>
              <input type="text" 
              name="address" 
              id="address" 
              className="h-12 p-4 border-2 rounded-md border-gray-300 focus:border-blue-400 mb-4"/>
            </form>

            <button
            onClick={handleFormSubmit}
            className='mx-auto w-3/5 rounded-md text-white text-xl bg-blue-500 h-12 hover:shadow-lg'
            >
              save and continue
            </button>
          </section>
        }
      </section>
    </section>
  )
}

export default Home
