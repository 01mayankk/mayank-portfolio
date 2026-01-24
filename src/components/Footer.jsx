import { FaGithub, FaLinkedin, FaEnvelope, FaCode, FaHackerrank, FaTerminal, FaBug, FaTwitter } from 'react-icons/fa6';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: FaGithub, href: "https://github.com/01mayankk", label: "GitHub" },
        { icon: FaLinkedin, href: "https://www.linkedin.com/in/01mayank/", label: "LinkedIn" },
        { icon: FaCode, href: "https://leetcode.com/u/01mayank/", label: "LeetCode" },
        { icon: FaHackerrank, href: "https://www.hackerrank.com/profile/01mayankk", label: "HackerRank" },
        { icon: FaTerminal, href: "https://www.geeksforgeeks.org/profile/01mayankk", label: "GeeksforGeeks" },
        { icon: FaBug, href: "https://codolio.com/profile/01mayank", label: "Codolio" },
        { icon: FaEnvelope, href: "mailto:02mayankk@gmail.com", label: "Email" },
    ];

    return (
        <footer className="bg-secondary/20 border-t border-white/5 py-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-cyan/20 to-transparent"></div>

            <div className="container mx-auto px-6 text-center">
                <div className="flex justify-center gap-8 mb-8 flex-wrap">
                    {socialLinks.map((social) => (
                        <a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-muted hover:text-white transition-all transform hover:-translate-y-2 duration-300 p-3 rounded-full hover:bg-accent-cyan/20 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]"
                            aria-label={social.label}
                        >
                            <social.icon size={28} />
                        </a>
                    ))}
                </div>

                <p className="text-xl font-heading font-semibold mb-2">Mayank Kumar</p>
                <p className="text-text-muted mb-6">Built with precision and passion.</p>

                <div className="text-sm text-text-muted/60">
                    &copy; {currentYear} All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
