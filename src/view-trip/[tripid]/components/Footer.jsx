import React from 'react'
import Youtube from '../../../assets/hticon.webp'
import Insta from '../../../assets/instaicon.webp'
import Disco from '../../../assets/disicon.webp'
import { Link } from 'react-router-dom'
// const socialLinks = [
//     { name: 'YouTube', url: 'https://www.youtube.com/@code_gully', icon:'../../../assets/instaicon.webp' },
//     // { name: 'Discord', url: 'https://discord.gg/xbeHBJRn6n', icon:{Disco} },
//     { name: 'Instagram', url: 'https://www.instagram.com/mr.k_official_01?igsh=ZWQ2Y3N6NWU2NHB5', icon:'../../../assets/instaicon.webp'},
// ]
// console.log(socialLinks.icon)
function Footer() {
    return (
        <div>
            <footer className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-col items-center justify-center space-y-4">
                        <div className="text-2xl font-bold">Connect With Us</div>
                        <div className="flex space-x-6">
                                <a
                                    href='https://www.youtube.com/@code_gully'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:opacity-80 transition-opacity duration-300"
                                >
                                    <img
                                        src={Youtube}
                                        // alt={link.name}
                                        width={24}
                                        height={24}
                                        className="w-8 h-8 rounded-md"
                                    />
                                </a>
                                <a
                                    href='https://discord.gg/xbeHBJRn6n'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:opacity-80 transition-opacity duration-300"
                                >
                                    <img
                                        src={Disco}
                                        // alt={link.name}
                                        width={24}
                                        height={24}
                                        className="w-8 h-8 rounded-md"
                                    />
                                </a>
                                <a
                                    href='https://www.instagram.com/mr.k_official_01?igsh=ZWQ2Y3N6NWU2NHB5'
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:opacity-80 transition-opacity duration-300"
                                >
                                    <img
                                        src={Insta}
                                        // alt={link.name}
                                        width={24}
                                        height={24}
                                        className="w-8 h-8 rounded-md"
                                    />
                                </a>
                        </div>
                        <div className="text-sm mt-4">
                            © {new Date().getFullYear()} Create By MrK . All rights reserved.
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer