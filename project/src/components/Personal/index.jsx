import './style.scss'
import { useState, useReducer, useContext } from 'react';
import { context } from '../../store'
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify'
import { useTranslation } from "react-i18next"




function reducerFunction(state, action) {
    // {type: 'increment'}  == parameter
    // parameter.type   ==  'increment'
    switch (action.type) {
        // case 'rotate':
        //     return { ...state, rotate: state.rotate }
        case 'text':
            return { ...state, text: action.value }
        case 'transform':
            return { ...state, transform: `rotate(${action.value}deg)` }
        default:
            return state
    }
}

const initialState2 = { // начальное состояние
    // rotate: 0
    text: "",
    transform: 0
}

function Personal(props) {
    const [form, setForm] = useState({})
    const [text, setText] = useState(". . . . .")
    const [ural, setUral] = useState()
    const { store, setStore } = useContext(context)

    const { t, i18n: { changeLanguage, language } } = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(language)

    const handleChangeLanguage = () => {
        const newLanguage = currentLanguage === "en" ? "ru" : "en";
        setCurrentLanguage(newLanguage);
        changeLanguage(newLanguage);
    }


    function handleDispatch(e) {
        const tag_name = e.target.name
        const value = e.target.value
        dispatch({
            type: tag_name,
            value: value
        })
    }

    function handleChange(e) {
        e.preventDefault()
        let key = e.target.name
        let val = e.target.value
        setForm({ ...form, [key]: val })
    }


    const [state, dispatch] = useReducer(reducerFunction, initialState2)

    function Submit(e) {
        e.preventDefault()

        const templateParams = {
            from_name: form.from_name,
            to_name: 'admin',
            email: form.email,
            phone: form.phone,
            message: form.message,
        }

        emailjs
            .send('service_gmail98q', 'template_uu7wyac', templateParams, {
                publicKey: '6g74YBR0OwKP3P-wf',
            })
            .then(
                (response) => {
                    toast.success('Ваше сообщение отправлено!', { theme: "dark" })
                },
                (err) => {
                    toast.error('Что-то пошло не так, попробуйте позже', { theme: "dark" })
                },
            );

        e.target.reset()
    }


    return (
        <div>

            <div className="useContext" style={{ backgroundColor: store.color, opacity: store.opacity + "%" }}>
                <h1>useContext :</h1>
                <p>Choose the color to change background.</p>
                <input type="Color" onChange={e => setStore({ type: "color", value: e.target.value })} value={store.color} />
                <hr />
                <div className="inc">
                    <p>{store.counter}</p>
                    <button onClick={() => setStore({ type: "increment" })}>Increment</button><br />
                    <button onClick={() => setStore({ type: "decrement" })}>Decrement</button>
                    <hr />
                </div>
                <br /><br />
                <p>You can change this div's opacity here <br />.|<br /> \/</p>
                <p>{store.opacity}</p>
                <input type="range" onChange={(e) => setStore({ type: "opacity", value: e.target.value })} />
            </div>

            <div className="useState">
                <h1>useState</h1>
                <p>{text}</p>
                <input type="text" placeholder='Type here' onChange={(e) => setText(e.target.value)} />
                <br /><br /><hr /><br />
                <input type="url" placeholder='Paste image URL here' onChange={(e) => setUral(e.target.value)} /><br /><br /><br />
                <img src={ural} alt="your image" />
            </div>

            <div className="useReducer" style={{ transform: state.transform }} >
                <h1>useReducer</h1>
                <p>Text : {state.text}</p>
                <input type="text" name='text' onChange={handleDispatch} placeholder='Text' />
                <br /><br /><hr /><br /><br />
                <p>{state.transform}</p>
                <input type="number" onChange={handleDispatch} name='transform' />

            </div><br /><br />


            <form className='else' onSubmit={Submit}>
                <h2>You have questions?<br /><br /> Write Us</h2>
                <input type="text" placeholder='Name' name='from_name' onChange={handleChange} required /><br />
                <input type="number" placeholder='Phone number' name='phone' onChange={handleChange} required /><br />
                <input type="text" placeholder='Email' name='email' onChange={handleChange} required /><br /><br />
                <textarea name="message" id="" cols="21" rows="1" placeholder='Your message' onChange={handleChange} required></textarea><br />
                <button>Send</button>
            </form>

        </div>
    );
}


export default Personal;