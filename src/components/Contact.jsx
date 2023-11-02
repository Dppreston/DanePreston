import { useEffect, useState, useRef } from "react";

import emailjs from "@emailjs/browser";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const contactForm = useRef();

  useEffect(() => {}, [name, email, message]);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_prezk62",
        "template_o8wt7ew",
        contactForm.current,
        "imrBB4H9jiXEOZlU7"
      )
      .then((result) => {
        setResult(
          <p className="p success">
            Message sent! I will get back to you soon!
          </p>
        );
        setTimeout(() => {
          setResult("");
        }, 3000);
      })
      .catch((error) => {
        setError(
          <p className="p error">Error sending message. Please try again!</p>
        );
        setTimeout(() => {
          setError("");
        }, 3000);
      });

    setEmail("");
    setMessage("");
    setName("");
  };
  return (
    <>
      <form
        id="contact-form"
        className="contact-form"
        name="contact-scroll"
        ref={contactForm}
      >
        <h2 className="h2">say hello, I would love to hear from you.</h2>
        <div className="name-email-cont">
          <label>
            <p className="p">Name</p>
            <input
              name="name"
              type="text"
              className="name"
              id="name"
              required={true}
              onChange={(e) => {
                setName(e.currentTarget.value);
              }}
              value={name}
            />
          </label>
          <label>
            <p className="p">Email</p>
            <input
              name="email"
              type="email"
              className="email"
              id="email"
              required={true}
              onChange={(e) => {
                setEmail(e.currentTarget.value);
              }}
              value={email}
            />
          </label>
        </div>
        <label>
          <p className="p">Message</p>
          <textarea
            className="message"
            name="message"
            id="message"
            cols="30"
            rows="10"
            required={true}
            onChange={(e) => {
              setMessage(e.currentTarget.value);
            }}
            value={message}
          ></textarea>
        </label>
        <button className="btn" id="message-send" onClick={handleSubmit}>
          Send
        </button>
        {result}
        {error}
      </form>
    </>
  );
}
export default Contact;
