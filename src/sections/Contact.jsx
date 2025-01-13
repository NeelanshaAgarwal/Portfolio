import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const formRef = useRef();
    const [form,setForm] = useState({
        name:'',
        email:'',
        message:'',
    });
    const [loading,setLoading] = useState(false);
    
    const handleChange = ({target: {name, value}}) => {
        setForm({ ...form, [name]: value });
    }

    //service_1f0quay
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        
        setLoading(true);

        try {
            
            await emailjs.send(
                'service_w85x48w','template_xah0th4',
                {
                    from_name: form.name,
                    to_name: 'Neelansha',
                    from_email: form.email,
                    to_email: 'neelansha4@gmail.com',
                    message: form.message
                },
                '_0283zzUj4N8YyHXC'
            )
                setLoading(false);

                alert('Your message has been sent')

                setForm({
                    name: '',
                    email:'',
                    message: ''
                })
                
        } catch (error) {
            console.error("EmailJS Error:", error);
            alert("Something went wrong!");
            setLoading(false);
        }
    }
    
  return (
    <section className='my-20 c-space' id='contact'>
      <div className="relative flex flex-col items-center justify-center min-h-screen">
            <motion.h2
                    className="text-4xl font-semibold text-center text-gray_gradient font-generalsans"
                    variants={textVariant(0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.8 }}
            >
                Contact Me
            </motion.h2>
            <motion.p
            className="text-center grid-subtext font-generalsans"
            variants={textVariant(0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.8 }}>
                Let's get in touch!
            </motion.p>

            <motion.div
            variants={textVariant(0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.8 }}
            className='flex-[0.75] p-8 rounded-2xl'>
                <form
                ref = {formRef}
                onSubmit={handleSubmit}
                className='flex flex-col mt-12 space-y-7'
                >
                <label className='space-y-3 '>
                    <span className='w-full field-label'>Full Name</span>
                    <input 
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className='field-input'
                    placeholder='Jhon Doe'
                    />
                </label>
                <label className='space-y-3'>
                    <span className='field-label'>Email</span>
                    <input 
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className='field-input'
                    placeholder='Jhondoe@gmail.com'
                    />
                </label>
                
                <label className='space-y-3'>
                    <span className='field-label'>Your message</span>
                    <textarea 
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className='field-input'
                    placeholder="Hi, I wanna give you a job..."
                    />
                </label>

                <button className='field-btn'
                type="submit"
                disabled={loading}>
                    {loading ? 'Sending...' : 'Send Message'}

                    <img src='./assets/arrow-up.png' alt='arrow-up' className='field-btn_arrow'/>
                </button>
                </form>
            </motion.div>
            
        </div>
    </section>
  )
}

export default Contact