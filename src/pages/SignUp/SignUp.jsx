// import { NavLink } from 'react-router-dom';
import { FaFacebookF } from "react-icons/fa";
import { IoLogoGoogleplus } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import './SignUp.css'
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {
    const { createUser, signInWithGoogle } = useContext(AuthContext);

    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)


        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log('created user', user)
            })
            .catch(error => console.log(error))

    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error => {
            console.log(error)
        })
    }


    return (
        <section className="hero min-h-screen bg-base-200">
            <div className="flex flex-col lg:flex-row-reverse shadow-xl hover:shadow-lg">
                {/* without signUp div  */}
                <div id='changed-item-vertically' className="lg:flex-1 px-5 order-1 lg:order-2 bg-gradient-to-br from-[#ff2b2b] to-[#FF416C] text-white text-center w-96 items-center justify-center">
                    <h2 className="items-center text-5xl text-center font-bold pt-8">Welcome Back!</h2>
                    <p className="my-4">Are you have created account before? If you are already a valid user. Please sign in</p>
                    <NavLink to="/login">
                        <button className="btn bg-transparent border-white text-white font-bold w-40 my-6 rounded-3xl shadow-2xl hover:bg-black hover:border-hidden">SIGN IN</button>
                    </NavLink>
                </div>

                {/* sign up div  */}
                <div className="lg:flex-1 p-1 order-2 lg:order-1 bg-white w-96">
                    <h2 className="text-center text-5xl font-bold pt-8">Sign up</h2>
                    <span className="flex align-middle justify-center mt-7">
                        <FaFacebookF className="border border-slate-400 rounded-full text-xl p-2 shadow-md hover:shadow-transparent box-content" />
                        <button onClick={handleGoogleSignIn}><IoLogoGoogleplus className="border border-slate-400 rounded-full text-xl p-2 shadow-md hover:shadow-transparent box-content mx-4" /></button>
                        <FaLinkedinIn className="border border-slate-400 rounded-full text-xl p-2 shadow-md hover:shadow-transparent box-content" />
                    </span>
                    <p className="text-zinc-600 text-center pt-2">or use your email for registration</p>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input bg-slate-100" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input bg-slate-100" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input bg-slate-100" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>
                        <div className="form-control my-6">                        
                            <button className="btn bg-loginOrangeColor text-white font-bold w-3/5 px-2 ml-16 rounded-3xl border-none shadow-2xl hover:shadow-xl hover:bg-black">SIGN UP</button>
                        </div>
                    </form>
                </div>
                
            </div>
        </section>
    );
};

export default SignUp;