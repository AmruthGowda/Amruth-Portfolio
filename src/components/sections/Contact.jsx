import { useState } from "react"
import { ReavealonScroll } from "../ReavealOnScroll"
import emailjs from 'emailjs-com'


export const Contact = () => {
    const [formdata , setFormdata] = useState({
        name : "",
        email : "",
        message : "",
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID,import.meta.env.VITE_TEMPLET_ID,e.target,import.meta.env.VITE_PUBLIC_KEY).then((result)=>{
            alert("message Send")
            setFormdata({name:"",email:"",message:""})
        }).catch(()=>alert("please try again"))
    }

    return <section id="contact" className="min-h-screen flex justify-center items-center py-20">
        <ReavealonScroll>
            <div className="px-4 w-150">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r 
                from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    Get In Touch
                </h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="relative">
                        <input type="text" id="name" name="name" 
                        value = {formdata.name}
                        required placeholder="name"
                        onChange={(e) => setFormdata({...formdata,name:e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 
                        text-white transition-all focus:outline-none 
                        focus:border-blue-500 focus:bg-blue-500/5">
                        </input>
                    </div>
                    <div className="relative">
                        <input type="email" id="email" 
                        value = {formdata.email}
                        onChange={(e) => setFormdata({...formdata,email:e.target.value})}
                        name="email" required placeholder="example@gmail.com"
                        className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 
                        text-white transition-all focus:outline-none 
                        focus:border-blue-500 focus:bg-blue-500/5">
                        </input>
                    </div>
                    <div className="relative">
                        <textarea  id="message" name="message" 
                        value = {formdata.message}
                        onChange={(e) => setFormdata({...formdata,message:e.target.value})}
                        required rows = {5} placeholder="Your Message"
                        className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 
                        text-white transition-all focus:outline-none 
                        focus:border-blue-500 focus:bg-blue-500/5">
                        </textarea>
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-3 px-6 
                    rounded font-medium transition realtive overflow-hidden hover:translate-y-0.5 hover:shadow=[0_0_15px_rgba(59,130,246,0.4)]">
                        Send Message
                    </button>
                </form>
            </div>
        </ReavealonScroll>
    </section>
}