import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom"
import { loginUser } from "../api";

export const Login = () => {
    const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })
    const [modal, setModal] = useState(true)
    const [status, setStatus] = useState("idle")
    const [error, setError] = useState(null)
    
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from || "/host"

    useEffect(() => {
        if (location.state?.message) {
            setTimeout(() => {
                setModal(false)
            }, 500);
        }

        return () => clearTimeout()
    }, [location.state?.message])

    function handleSubmit(e) {
        e.preventDefault()
        setStatus("submitting")
        loginUser(loginFormData)
            .then(data => {
                setError(null)
                localStorage.setItem("loggedin", true)
                navigate(from, { replace: true })
            })
            .catch (err => {
                setError(err)
            })
            .finally(() => {
                setStatus("idle")
            })
    }

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    function toggle() {
        setModal(prevModal => !prevModal)
    }

    return (
        <div className="login-container">
            {location.state?.message && 
                <div className={`modal-container ${modal ? "hidden" : null}`}>
                    <h3>Please<br></br>Sign<br></br>In</h3>
                    <button onClick={toggle}>Close</button>
                </div>
            }
            <h1>Sign in to your account</h1>
            {error?.message && <h3 className="failed-login">Incorrect Username or Password</h3>}
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    value={loginFormData.email}
                />
                <input
                    name="password"
                    onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    value={loginFormData.password}
                />
                <button disabled={status === "submitting"}>{status === "submitting" ? "Logging in..." : "Log in"}</button>
            </form>
        </div>
    )
}