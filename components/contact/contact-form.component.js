import { useEffect, useRef, useState } from "react"
import Notification from '../ui/notification'
import { Actions, ContactSection, Label, 
    Button, Control, Controls, Title, Input, Textarea 
} from "./contact-form.styles"

const sendContactData = async (details) => {
    const response = await fetch('api/contact', {
        method:'POST',
        body: JSON.stringify(details),
        headers: {
            'Content-Type':"application/json"
        }
    })
    const data = await response.json()
    if (!response.ok){
        throw new Error(data.message || "Something went wrong")
    }

    return data
}

const ContactForm = () => {
    const emailRef = useRef()
    const nameRef = useRef()
    const messageRef = useRef()

    // 3 states => pending, error, success
    const [requestStatus, setRequestStatus] = useState(null)
    const [requestError, setRequestError] = useState(null) 

    useEffect(() => {
        if (requestStatus==="success"||"error"){
            const timer = setTimeout(() => {
                setRequestStatus(null)
                setRequestError(null)
            },3000)

            return () => clearTimeout(timer)
        }
    }, [requestStatus])
    

    const handleSubmit = async (e) => {
        e.preventDefault()
        setRequestStatus('pending')
        try{
            await sendContactData({
                email : emailRef.current.value,
                name : nameRef.current.value,
                message : messageRef.current.value
            })
            setRequestStatus('success')
            emailRef.current.value = ''
            nameRef.current.value = ''
            messageRef.current.value = ''
        }catch(err){
            setRequestError(err.message)
            setRequestStatus('error')
        }        
    }

    let notification
    if (requestStatus==="pending"){
        notification={
            status: "pending",
            title:'Sending message',
            message:'your message is being sent'
        }
    }
    if (requestStatus==="success"){
        notification={
            status:"success",
            title:"message sent",
            message:"received by our database"
        }
        console.log("notification",notification)
    }
    else if(requestStatus==="error"){
        notification={
            status:"error",
            title:'error sending message',
            message:requestError
        }
    }

    return (
        <ContactSection>
            <Title>Contact Form</Title>
            <form onSubmit={handleSubmit}>
                <Controls>
                    <Control>
                        <Label htmlFor="email">Your email</Label>
                        <Input type="email" id="email" required ref={emailRef}/>                    
                    </Control>
                    <Control>
                        <Label htmlFor="name">Your name</Label>
                        <Input type="text" id="name"  ref={nameRef}/>                    
                    </Control>
                </Controls>                
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" rows="5"  ref={messageRef}/>                           
                <Actions>
                    <Button>Send Message</Button>
                </Actions>                
            </form>
            {
                notification && <Notification 
                status={notification.status} 
                title={notification.title} 
                message={notification.message} />
            }
        </ContactSection>
    )
}

export default ContactForm
