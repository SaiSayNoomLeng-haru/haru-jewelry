import classNames from "classnames"
import { memo, useEffect, useRef, useState } from "react"
import { Form, useActionData } from 'react-router';
import Button from "../UtilityComponents/Button";
import { toast } from "react-toastify";

export async function action({request}){
    const formData =  await request.formData();

    const name = formData.get('name').trim();
    const email = formData.get('email').trim();
    const subject = formData.get('subject').trim();
    const message = formData.get('message').trim();

    const error = {};

    // name validation
    if( name === '' || name.length < 3){
        error.name = 'Name field must not be empty and require to be at least 3 characters.'
    }

    // email validation
    const email_Reg = /^[a-zA-Z0-9%-+.]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(email === ''){
        error.email = `Email field must not be empty.`
    }else if(!email_Reg.test(email)){
        error.email = `Must be a valid Email Address`
    }

    // subject validation
    if( subject === '' || subject.length < 5){
        error.subject = `Subject must have at least 5 characters.`
    }

    // message validation
    if( message === '' || message.length < 10){
        error.message = `Message must be at least 10 characters.`
    }

    if(Object.keys(error).length > 0){
        return { error : error };
    }

    const userData = {
        name,
        email,
        subject,
        message
    }

    return { success: true};
}


const ContactUs = () => {
    const actionData = useActionData();
    const [ error, setError ] = useState(actionData?.error || {});
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const subjectRef = useRef(null);
    const messageRef = useRef(null);

    useEffect(() => {
        if(actionData?.success){
            toast.success('Your message was sent successfully.')
        }
    }, [actionData]);

    useEffect(() => {
        if(error?.name) nameRef.current = true;
        else if(error?.email) emailRef.current = true;
        else if(error?.subject) subjectRef.current = true;
        else if(error?.message) messageRef.current = true;
    }, [actionData]);


    // clear error as the user fix their inputs
    const handleChange = (field) => {
        setError(prevErr => (
            {
                ...prevErr,
                [field] : null
            }
        ))
    }

    // classes and styles
    const contactUsClass = classNames(
        'custom-container grid gap-2 place-content-center',
        'md:grid-cols-2'
    )

    const labelClass = classNames(
        "after:content-['*'] after:text-custom-pale-red"
    )

    const inputClass = classNames(
        "bg-transparent border border-black rounded-sm indent-2 outline-none focus:border-custom-dark-green py-2 focus:border-2 ", 
        {
            'border-custom-pale-red animate-inputError' : nameRef.current
        }
    )
    return(
        <section className={contactUsClass}>
            <div className="space-y-3">
                <h1 className="text-fs-500 font-semibold">Get In Touch With Us!</h1>
                <p className="text-fs-300">We value your privacy! Your information is confidential with us.</p>
                <p className="text-fs-300">Read our <span className="underline text-custom-dark-green font-semibold">Users' terms and conditions.</span></p>

                <Form
                    method='POST'
                    className="grid md:grid-cols-2 gap-2">
                    
                    <div className="flex flex-col gap-1">
                        <label 
                            htmlFor="name"
                            className={labelClass}>Your Name</label>
                        <input 
                            type="text"
                            id="name"
                            ref={nameRef}
                            name="name"
                            className={inputClass}placeholder="Eg. John Doe"
                            autoComplete="off"
                            onChange={() => handleChange('name')} />
                        
                    </div>

                    <div className="flex flex-col gap-1">
                        <label 
                            htmlFor="email"
                            className={labelClass}>Your Email</label>
                        <input 
                            type="text"
                            id="email"
                            ref={emailRef}
                            name="email"
                            className={inputClass} 
                            placeholder="Eg. expample@mail.com"
                            autoComplete="off"
                            onChange={() => handleChange('email')} />
                        
                    </div>

                    <div className="flex flex-col gap-1 md:col-span-full">
                        <label 
                            htmlFor="subject"
                            className={labelClass}>Subject</label>
                        <input 
                            type="text"
                            id="subject"
                            ref={subjectRef}
                            name="subject"
                            className={inputClass}
                            placeholder="Eg. John Doe"
                            autoComplete="off" />
                    </div>

                    <div className="flex flex-col gap-1 md:col-span-full">
                        <label 
                            htmlFor="message"
                            className={labelClass}>Your Message</label>
                        <textarea 
                        name="message" 
                        id="message"
                        ref={messageRef}
                        className={inputClass}></textarea>
                        
                    </div>

                    <Button className="bg-custom-dark-green text-white md:col-span-2 active:bg-custom-dark-orange">
                        Send Us a Message!
                    </Button>
                </Form>
            </div>

            <div>
                <img src="/assets/images/photo-1.jpg" alt="" />
            </div>
        </section>
    )
}

export default memo(ContactUs)