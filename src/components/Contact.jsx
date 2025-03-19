import React, { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaCopy } from 'react-icons/fa'

function Contact() {
    const [copied, setCopied] = useState({
        phone: false,
        workEmail: false,
        homeEmail: false
    });

    const contactDetails = {
        name: 'Aviral Mishra',
        phone: '+91 8756732361',
        workEmail: 'aviral.20225017@mnnit.ac.in',
        homeEmail: 'aviralmishra10@gmail.com',
        mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3019.5858671961237!2d81.86570263116327!3d25.493736967478863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399aca789e0c84a5%3A0x2c27733a7529bf08!2sMNNIT%20Allahabad%20Campus%2C%20Teliarganj%2C%20Prayagraj%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1742304554245!5m2!1sen!2sin"
    };

    const copyToClipboard = (text, type) => {
        navigator.clipboard.writeText(text);
        setCopied(prev => ({
            ...prev,
            [type]: true
        }));
        setTimeout(() => {
            setCopied(prev => ({
                ...prev,
                [type]: false
            }));
        }, 2000);
    };

    return (
        <section
            id="contact"
            className="
                min-h-screen
                bg-gradient-to-r from-slate-950 via-black to-slate-950 bg-size-200
                py-16
                flex
                items-center
                justify-center
            "
        >
            <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
                <div
                    className="
                        bg-black
                        rounded-xl
                        p-8
                        text-white
                        flex
                        flex-col
                        justify-center
                        space-y-6
                        shadow-lg
                    "
                >
                    <h2 className="text-4xl font-bold mb-6 text-center">
                        Contact Me
                    </h2>

                    <div className="flex items-center space-x-4">
                        <FaMapMarkerAlt className="text-2xl text-red-500" />
                        <div>
                            <h3 className="text-xl font-semibold">Name</h3>
                            <p className="text-gray-300">{contactDetails.name}</p>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <FaPhone className="text-2xl text-red-500" />
                        <div className="flex-grow">
                            <h3 className="text-xl font-semibold">Phone</h3>
                            <p className="text-gray-300">{contactDetails.phone}</p>
                        </div>
                        <button
                            onClick={() => copyToClipboard(contactDetails.phone, 'phone')}
                            className="
                                text-gray-400
                                hover:text-white
                                transition-colors
                            "
                        >
                            <FaCopy className={`
                                ${copied.phone ? 'text-green-500' : ''}
                            `} />
                        </button>
                    </div>

                    <div className="flex items-center space-x-4">
                        <FaEnvelope className="text-2xl text-red-500" />
                        <div className="flex-grow">
                            <h3 className="text-xl font-semibold">Work Email</h3>
                            <p className="text-gray-300">{contactDetails.workEmail}</p>
                        </div>
                        <button
                            onClick={() => copyToClipboard(contactDetails.workEmail, 'workEmail')}
                            className="
                                text-gray-400
                                hover:text-white
                                transition-colors
                            "
                        >
                            <FaCopy className={`
                                ${copied.workEmail ? 'text-green-500' : ''}
                            `} />
                        </button>
                    </div>

                    <div className="flex items-center space-x-4">
                        <FaEnvelope className="text-2xl text-red-500" />
                        <div className="flex-grow">
                            <h3 className="text-xl font-semibold">Personal Email</h3>
                            <p className="text-gray-300">{contactDetails.homeEmail}</p>
                        </div>
                        <button
                            onClick={() => copyToClipboard(contactDetails.homeEmail, 'homeEmail')}
                            className="
                                text-gray-400
                                hover:text-white
                                transition-colors
                            "
                        >
                            <FaCopy className={`
                                ${copied.homeEmail ? 'text-green-500' : ''}
                            `} />
                        </button>
                    </div>
                </div>


                <div className="w-full h-[600px] rounded-xl overflow-hidden hover:translate-y-1.5 shadow-lg">
                    <iframe
                        src={contactDetails.mapsEmbedUrl}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full"
                    ></iframe>
                </div>
            </div>
        </section>
    )
}

export default Contact