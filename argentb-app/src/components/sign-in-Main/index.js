import React from "react";
import SignInForm from "../signinform";

function SingnInMain() {
    return (
        <div>
            <main class="main bg-dark">
                <section class="sign-in-content">
                    <i class="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <h2>ici form Sign in</h2>
                    <SignInForm/>
                </section>
            </main>
        </div>
    );
}

export default SingnInMain


