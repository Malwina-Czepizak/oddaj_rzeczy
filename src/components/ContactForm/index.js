import React, {useState} from 'react';
import "./ContactForm.scss";
import decorator from "../../assets/Decoration.svg";
import Footer from "../Footer";

function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [success, setSuccess] = useState(null);
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [messageError, setMessageError] = useState("");
    const [newClass, setNewClass] = useState("");

    const sendMessage = e => {
        e.preventDefault();

        const errors = {}
        if (name === "" || name.indexOf(" ") !== -1) {
            errors.name = "Podane imię jest nieprawidłowe!"
            setNewClass("error__border")
        } else {
            errors.name = "";
            setNewClass("");
        }
        const re = /\S+@\S+\.\S+/;
        if (!re.test(email)) { //mail zły
            errors.email = "Podany email jest nieprawidłowy!"
            setNewClass("error__border")
        } else {
            errors.email = "";
            setNewClass("");
        }
        if (message === "" || message.length < 120) {
            errors.message = "Wiadomość musi mieć conajmniej 120 znaków!"
            setNewClass("error__border")
        } else {
            errors.message = "";
            setNewClass("");
        }

        if (!Object.values(errors).find(el => !!el)) {

            const data = {
                name,
                email,
                message
            }

            fetch (`https://fer-api.coderslab.pl/v1/portfolio/contact`,
                {
                    method : 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        "Content-Type": "application/json",
                    }
                })
                .then((response) => response.json())
                .then((data) => {
                    if (data.status === "success") {
                        setSuccess(true)
                    }
                    setName("");
                    setEmail("");
                    setMessage("");
                })
                .catch((error) => {
                    console.log(error)
                });
        }
            setMessageError(errors.message);
            setNameError(errors.name);
            setEmailError(errors.email)
    };

    return (
        <section name="contact" className="contact">
            <form onSubmit={sendMessage}>
                <h3>Skontaktuj się z nami</h3>
                <img src={decorator} alt="decoration"/>
                {success && <p className="success">Wiadomość została wysłana! Wkrótce się skontaktujemy</p>}
                <div className="contact__row">
                    <div className="contact__input">
                    <label for="name">Wpisz swoje imię</label>
                    <input
                        className= {nameError?newClass:''}
                        id="name"
                        name="name"
                        placeholder="Malwina"
                        value={name}
                        onChange={(e => {
                            setName(e.target.value);
                        })}
                    />
                    {nameError && <p className="error">{ nameError }</p>}
                    </div>
                    <div className="contact__input">
                    <label for="email">Wpisz swój email</label>
                    <input
                        className={emailError?newClass:''}
                        id="email"
                        name="email"
                        placeholder="email@gmail.com"
                        value={email}
                        onChange={(e => {
                            setEmail(e.target.value);
                        })}
                    />
                    {emailError && <p className="error">{ emailError }</p>}
                    </div>
                </div>
                <div className="contact__input">
                    <label for="message">Wpisz swoja wiadomość</label>
                    <textarea
                        className={messageError?newClass:''}
                        id="message"
                        name="message"
                        placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                        value={message}
                        onChange={(e => {
                            setMessage(e.target.value);
                        })}
                    />
                    {messageError && <p className="error">{ messageError }</p>}
                </div>
                <button type="submit">Wyślij</button>
            </form>
            <Footer />
        </section>
    );
}

export default ContactForm;