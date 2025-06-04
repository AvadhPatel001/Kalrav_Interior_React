import { contactInformation } from "../Content/Data";
import { Phone } from "lucide-react";
import { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState('');

    const validate = () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.name.trim()) newErrors.name = 'Name is required';
        if (!emailRegex.test(formData.email)) newErrors.email = 'Enter a valid email';
        if (!formData.message.trim()) newErrors.message = 'Message cannot be empty';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
        setErrors(prev => ({ ...prev, [e.target.name]: '' }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        setStatus('Sending...');

        emailjs.send(
            'your_service_id',      // Replace with your EmailJS service ID
            'your_template_id',     // Replace with your EmailJS template ID
            formData,
            'your_user_id'          // Replace with your EmailJS public key
        )
            .then(() => {
                setStatus('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
            })
            .catch(() => {
                setStatus('Failed to send message. Please try again later.');
            });
    };

    return (
        <div id="contact">
            <div className="flex flex-col lg:flex-row border-2 border-neutral-700 rounded-xl bg-neutral-950 px-5 py-10 ">

                <div className="lg:hidden mb-8">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl text-center text-neutral-200">Let{`'`}s Discuss <span className="bg-gradient-to-r from-orange-500 to-orange-700 text-transparent bg-clip-text">Your Project!</span></h3>
                    <hr className="text-neutral-700 my-5 mx-auto w-3/4 sm:w-1/2 lg:1/4" />
                    <p className="text-center italic text-neutral-400">Fill this form and we will contact you!</p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col w-4/5 lg:w-1/3 gap-5 mx-auto mb-5 lg:mb-0">

                    <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="border-2 border-neutral-400 rounded focus:bg-neutral-800 hover:bg-neutral-800 py-2 px-5"
                        type="text"
                        placeholder="Enter Your Name"
                    />
                    {errors.name && <span className="text-red-500 text-sm -mt-2">{errors.name}</span>}

                    <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="border-2 border-neutral-400 rounded focus:bg-neutral-800 hover:bg-neutral-800 py-2 px-5"
                        type="text"
                        placeholder="Enter Your Email"
                    />
                    {errors.email && <span className="text-red-500 text-sm -mt-2">{errors.email}</span>}

                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="border-2 border-neutral-400 rounded focus:bg-neutral-800 hover:bg-neutral-800 py-2 px-5"
                        placeholder="Enter Your Message"
                    />
                    {errors.message && <span className="text-red-500 text-sm -mt-2">{errors.message}</span>}

                    <button
                        type="submit"
                        className="text-neutral-200 mt-5 w-2/3 lg:w-1/3 py-2 mx-auto rounded-xl border-2 border-neutral-500 active:scale-98 hover:bg-neutral-600 transition-all">
                        SUBMIT
                    </button>
                    {status && <p className="text-center mt-1 text-sm text-neutral-300">{status}</p>}

                </form>


                <div className="mx-auto w-full lg:w-2/3">
                    <div className="hidden lg:block">
                        <h3 className="text-xl sm:text-2xl lg:text-3xl text-center text-neutral-200">Let{`'`}s Discuss <span className="bg-gradient-to-r from-orange-500 to-orange-700 text-transparent bg-clip-text">Your Project!</span></h3>
                        <hr className="text-neutral-700 my-5 mx-auto w-3/4 sm:w-1/2 lg:1/4" />
                        <p className="text-center italic text-neutral-400">Fill this form and we will contact you!</p>
                    </div>

                    <div className="flex flex-wrap flex-col sm:flex-row items-center lg:flex-row gap-y-5 gap-x-5 lg:gap-x-10 mt-5 justify-evenly">

                        <div className="flex gap-3 w-4/5 sm:w-2/5 lg:w-1/3">
                            <Phone className="w-10 h-10 text-orange-500" />
                            <div>
                                <h2 className="text-xl text-neutral-300">Call Us</h2>
                                <p className="text-neutral-400">+91 95866 41338 <br />+91 83473 42356</p>
                            </div>
                        </div>

                        {contactInformation.map((item, index) => (
                            <div key={index} className="flex gap-3 w-4/5 sm:w-2/5 lg:w-1/3">
                                <div className="text-orange-500">
                                    {item.icon}
                                </div>
                                <div>
                                    <h2 className="text-xl text-neutral-300">{item.title}</h2>
                                    <p className="text-neutral-400">{item.contactInfo}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact