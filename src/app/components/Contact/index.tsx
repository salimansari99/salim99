'use client';

export default function Contact() {
    return (
        <>
            <section className="contact-container">
                <h2 className="ttl">Contact Me</h2>

                <form className="form-container">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" placeholder="What should I call you ?" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="Where can I reach you ?" />
                    </div>
                    <div className="form-group msg">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message" className="msg-area" cols={30} rows={5} placeholder="Typing..."></textarea>
                    </div>
                    <div className="form-group full-width">
                        <button type="submit" className="send-btn">SEND</button>
                    </div>
                </form>
                <div className="send-email">
                    <p className="mail-txt">Or send me a direct email at</p>
                    <p className="mail-id">salim99.official@gmail.com</p>

                </div>
            </section>

            <style jsx>{`
                .contact-container {
                    display: flex;
                    flex-direction: column;
                    padding: 20px 40px;
                    margin: 0 auto;
                    height: 680px;
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
                    .send-email {margin: 10px auto; width: 40%; text-align: center;}
                    .mail-txt {font-size: 18px;font-weight: normal; margin-bottom: 10px;}
                    .mail-id {font-size: 18px;font-weight: bold}
            `}</style>
        </>
    );
}