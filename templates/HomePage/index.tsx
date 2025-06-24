"use client";

import Header from "@/components/Header";
import Hero from "./Hero";
import Work from "./Work";
import Details from "./Details";
import Testimonials from "./Testimonials";
import Pricing from "./Pricing";
import Faq from "./Faq";
import Description from "./Description";
import Footer from "@/components/Footer";
import styles from "./Home.module.sass";
import Modal from "@/components/Modal";
import { modalButtonClass } from "@/components/Button";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import Button from "@/components/Button";
import { supabase } from "@/app/supabaseClient";

const HomePage = () => {
    const [modal, setModal] = useState<null | "getStarted" | "signIn" | "confirmation">(null);
    const openGetStarted = () => setModal("getStarted");
    const openSignIn = () => setModal("signIn");
    const closeModal = () => setModal(null);
    const [email, setEmail] = useState("");
    const [signInEmail, setSignInEmail] = useState("");
    const handleGetStartedSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const { error } = await supabase.auth.signInWithOtp({ email });
        if (error) {
            alert(error.message);
            return;
        }
        setModal("confirmation");
    };
    const handleSignInSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const { error } = await supabase.auth.signInWithOtp({ email: signInEmail });
        if (error) {
            alert(error.message);
            return;
        }
        setEmail(signInEmail);
        setModal("confirmation");
    };
    return (
        <div className={styles.outer}>
            <Header onSignIn={openSignIn} />
            <Hero onGetStarted={openGetStarted} />
            <Work />
            <Details />
            <Testimonials />
            <Pricing onGetStarted={openGetStarted} />
            <Faq />
            <Description onGetStarted={openGetStarted} />
            <Footer />
            <Modal open={modal === "getStarted"} onClose={closeModal}>
                <h2 style={{marginTop: 32, marginBottom: 8}}>Get your magic link to get started</h2>
                <div style={{marginBottom: 24, color: "rgba(248,248,248,0.7)", fontSize: 15}}>
                    You're one scan away from business card superpowers!<br />
                    Enter your email and we'll zap a magic link to your inbox.<br />
                    No passwords, no drama just pure Scanlify magic! 🪄💌
                </div>
                <form style={{width: "100%", display: "flex", flexDirection: "column", alignItems: "center"}} onSubmit={handleGetStartedSubmit}>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Your email address" required style={{width: "100%", padding: "12px 16px", borderRadius: 16, border: "1px solid rgba(248,248,248,0.15)", background: "rgba(40,40,40,0.7)", color: "#fff", fontSize: 16, marginBottom: 16}} />
                    <Button className={modalButtonClass} title="Send magic link" type="submit" />
                </form>
                <div style={{marginTop: 18, fontSize: 14, color: "rgba(248,248,248,0.5)"}}>
                    Already have an account? <a href="#" style={{color: "#fff", textDecoration: "underline"}} onClick={e => {e.preventDefault(); setModal("signIn");}}>Sign in</a>
                </div>
            </Modal>
            <Modal open={modal === "signIn"} onClose={closeModal}>
                <h2 style={{marginBottom: 8}}>Sign in to your account</h2>
                <div style={{marginBottom: 24, color: "rgba(248,248,248,0.7)", fontSize: 15}}>
                    Enter your email and we'll send you a magic link to sign in instantly.
                </div>
                <form style={{width: "100%", display: "flex", flexDirection: "column", alignItems: "center"}} onSubmit={handleSignInSubmit}>
                    <input type="email" value={signInEmail} onChange={e => setSignInEmail(e.target.value)} placeholder="Your email address" required style={{width: "100%", padding: "12px 16px", borderRadius: 16, border: "1px solid rgba(248,248,248,0.15)", background: "rgba(40,40,40,0.7)", color: "#fff", fontSize: 16, marginBottom: 16}} />
                    <Button className={modalButtonClass} title="Send magic link" type="submit" />
                </form>
                <div style={{marginTop: 18, fontSize: 14, color: "rgba(248,248,248,0.5)"}}>
                    Don't have an account? <a href="#" style={{color: "#fff", textDecoration: "underline"}} onClick={e => {e.preventDefault(); setModal("getStarted");}}>Get started</a>
                </div>
            </Modal>
            <Modal open={modal === "confirmation"} onClose={closeModal}>
                <div className={"confirmationIcon"}>
                    <FaCheck />
                </div>
                <h2 style={{marginBottom: 8, textAlign: "center"}}>Check your email!</h2>
                <div style={{marginBottom: 16, color: "rgba(248,248,248,0.7)", fontSize: 16, textAlign: "center"}}>
                    We've sent a magic link to <b>{email}</b>.<br />
                    Please check your inbox and spam folder.<br />
                    Follow the link to complete your registration.
                </div>
                <Button className={modalButtonClass} style={{marginTop: 8}} title="Close" onClick={closeModal} />
            </Modal>
        </div>
    );
};

export default HomePage;
