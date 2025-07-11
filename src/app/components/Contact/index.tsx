'use client';
import { useEffect, useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [showThankMsg, setShowThankMsg] = useState(false);

    const fetchRandomUser = async () => {
        try {
            const res = await fetch('https://randomuser.me/api/');
            const data = await res.json();
            const user = data.results[0];

            setFormData((prev) => ({
                ...prev,
                name: `${user.name.first} ${user.name.last}`,
                email: user.email,
                message: `Hi Salim, I'm reaching out to connect with you.`,
            }));
        } catch (err) {
            console.error('Failed to fetch user:', err);
        }
    };

    useEffect(() => {
        fetchRandomUser(); // Auto-fill on mount (optional)
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Submitted:', formData);
        setShowThankMsg(true);
        setTimeout(() => {
            setShowThankMsg(false);
        }, 2000);
        // You can now send this formData to an endpoint or email service
    };

    return (
        <>
            <section className="contact-container">
                <h2 className="ttl">Contact Me</h2>

                <form className="form-container">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" onChange={handleChange} placeholder="What should I call you ?" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" onChange={handleChange} placeholder="Where can I reach you ?" />
                    </div>
                    <div className="form-group msg">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" onChange={handleChange} className="msg-area" cols={30} rows={5} placeholder="Typing..."></textarea>
                    </div>
                    <div className="form-group full-width">
                        <button type="submit" onClick={handleSubmit} className="send-btn">SEND</button>
                    </div>
                </form>
                <div className="send-email">
                    <p className="mail-txt">Or send me a direct email at</p>
                    <p className="mail-id">salim99.official@gmail.com</p>

                </div>

                <div className="success-msg-overlay" style={{display: showThankMsg ? 'block' : 'none'}}>
                <div className="success-modal">
                    <p className="greeting-msg">Thanks for reaching out!</p>
                </div>
            </div>

            </section>

            

            <style jsx>{`
                .contact-container {
                    display: flex;
                    flex-direction: column;
                    padding: 20px 40px;
                    margin: 0 auto;
                    height: 660px;
                    background: #f2f2f2;
                    justify-content: center;
                    gap: 32px;
                }

                .form-container {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 20px;
                    justify-content: center;
                    align-items: flex-start;
                    margin: 0 80px;
                }

                .form-group {
                    width: 48%;
                    display: flex;
                    flex-direction: column;
                }

                .form-group label {
                    color: #000;
                    font-size: 18px;
                    font-weight: 500;
                    margin-bottom: 5px;
                }

                .form-group input {
                    border: 1px solid #9a9a9a;
                    padding: 8px;
                    border-radius: 8px;
                    outline: none;
                }

                .msg {
                    width: 98%;
                }

                .msg-area {
                    border: 1px solid #9a9a9a;
                    padding: 8px;
                    border-radius: 8px;
                    outline: none;
                    width: 100%;
                }

                .full-width {
                    width: 100%;
                    text-align: center;
                }

                .send-btn {
                    background: #000;
                    color: #fff;
                    padding: 12px;
                    border-radius: 8px;
                    font-size: 18px;
                    font-weight: 500;
                    width: 96px;
                    margin: 20px auto;
                }
                    .send-email {margin: 10px auto; width: 40%; text-align: center; border-top: 1px solid #000;}
                    .mail-txt {font-size: 18px;font-weight: normal; margin-block: 10px;}
                    .mail-id {font-size: 18px;font-weight: bold}

                    @media (max-width: 768px) {
                    .contact-container {padding: 12px; height: 770px;}
                    .form-container {margin: 0;}
                    .form-group {width: 100%;}
                    .send-email {width: 100%;}
                    }
            `}</style>
            <style jsx>{`
            .success-msg-overlay {
            display: none;
            content: '';
            position: fixed;
            top: 30%;
            left: 40%;
            text-align: center;
            
            }
            .success-modal {width: 360px; height: 360px; background: #e0e0e0; z-index: 9999;border-radius: 24px;}
            .greeting-msg {color: #000; font-size: 32px; font-weight: bold; padding: 32px; }
            @media (max-width: 768px) {
            .success-msg-overlay {left: 14px;}
            }
            `}</style>
        </>
    );
}