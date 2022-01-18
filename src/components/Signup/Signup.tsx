import React, { useState } from 'react'
import './_Signup.scss'

import { FaUserAlt } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { RiLockPasswordFill } from 'react-icons/ri'
import { BsGithub } from 'react-icons/bs'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'




const Signup: React.FC = () => {
    const [Username, setUsername] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')

    const { UserSignup } = useActions();
    const { data, error, loading } = useTypedSelector(
        (state) => state.SignupAuthReducer
    );
    const formSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("signup");

        UserSignup({
            username: Username,
            email: Email,
            password: Password,

        })

    }

    return (
        <form onSubmit={formSubmit} >
            <h2 className="signup_title">Sign up</h2>
            <div className="signup_inputfield">
                <FaUserAlt className='signup_inputfield_icons' />
                <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="signup_inputfield">
                <SiGmail className='signup_inputfield_icons' />
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="signup_inputfield">
                <RiLockPasswordFill className='signup_inputfield_icons' />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <input type="submit" className="signup_btn" value="Sign up" />
            <p className="signup_socialtext">Or Sign up with social platforms</p>
            <div className="signup_socialmedia">
                <BsGithub className='signup_icon' />
            </div>
        </form>
    )
}

export default Signup
