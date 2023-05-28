import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import { sendMessageToTelegram } from '../utils/sendMessageToTelegram'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)
  const notify = () => toast.success('Message sent successfully!')
  const handleChange = (e) => {
    const { target } = e
    const { name, value } = target

    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (form.name && form.email && form.message) {
      setLoading(true)

      sendMessageToTelegram(
        `Pgabow.ru \n\nЮзер ${form.name}, email ${form.email} пишет: \n\n'${form.message}'`
      )
        .then(() => {
          setLoading(false)
					notify()
          setForm({
            name: '',
            email: '',
            message: '',
          })
        })
        .catch((error) => {
          setLoading(false)
          console.error(error)
        })
    }

    // sendMessageToTelegram(`Pgabow.ru \nЮзер ${form.name}, email ${form.email} пишет: \n'${form.message}'`)
    // try {
    //   setLoading(false)
    //   setForm({
    //     name: '',
    //     email: '',
    //     message: '',
    //   })
    // } catch {
    //   setLoading(false)
    //   console.error(error)
    // }

    // mail again
    // emailjs
    //   .send(
    //     import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
    //     import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
    //     {
    //       from_name: form.name,
    //       to_name: "Paul",
    //       from_email: form.email,
    //       to_email: "pgabow@gmail.com",
    //       message: form.message,
    //     },
    //     import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    //   )
    //   .then(
    //     () => {
    //       setLoading(false);
    //       alert("Thank you. I will get back to you as soon as possible.");
    //       setForm({
    //         name: "",
    //         email: "",
    //         message: "",
    //       });
    //     },
    //     (error) => {
    //       setLoading(false);
    //       console.error(error);

    //       alert("Ahh, something went wrong. Please try again.");
    //     }
    //   );
  }

  return (
    <>
      <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Name :</span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder='Your name'
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Email :</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder='Your email address'
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Message :</span>
              <textarea
                rows={7}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='What you want to say?'
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>

            <button
              type='submit'
              className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
        >
          <EarthCanvas />
        </motion.div>
      </div>
      <p className='text-center text-gray-500 dark:text-gray-400 pt-10'>
        {' '}
        © {new Date().getFullYear()} - All Rights <span className='underline'>Not Reserved</span>
      </p>
      <ToastContainer position='bottom-center' />
    </>
  )
}

export default SectionWrapper(Contact, 'contact')
