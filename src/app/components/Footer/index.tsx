'use client';

export default function Footer() {
    return (
        <>
        <footer className="footer">
            <div className="copyright">
                <p>© Copyright - 2025 Salim Ansari — <a href="#">salim99</a></p>
            </div>
            <ul className="soc-list">
                <li className="soc-item"><img className="soc-img" src="/images/linkedin-ic.png" alt="" /></li>
                <li className="soc-item"><img className="soc-img" src="/images/github-ic.png" alt="" /></li>
                <li className="soc-item"><img className="soc-img" src="/images/email-ic.png" alt="" /></li>
                <li className="soc-item"><img className="soc-img" src="/images/telegram-ic.png" alt="" /></li>
            </ul>
        </footer>
        <style jsx>{`
        .footer {height: 60px; display: flex; padding: 12px 48px;background: #ccc;justify-content: space-around;
    align-items: center;}
        .copyright {font-size: 16px; color: rgb(0 0 0 /65%)}
        .soc-list {display: flex; align-items: center; gap: 18px; justify-content: center;}
        .soc-item {padding: 5px 8px; background: #f2f2f2; border-radius: 12px; cursor: pointer; }
        .soc-item:hover {background: #a7a7a7;}
        .soc-img {width: 32px; height: 32px;}
        `}</style>
        </>
    ); 
}