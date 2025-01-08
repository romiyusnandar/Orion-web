import Image from 'next/image';
import Link from 'next/link'
import { FaGithub, FaTelegram, FaHeart } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 z-0 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-6">
            <Link href="https://github.com/orionos-prjkt" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 transition-colors">
              <FaGithub size={30} />
            </Link>
            <Link href="https://t.me/OrionOS_prjkt" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 transition-colors">
              <FaTelegram size={30} />
            </Link>
          </div>
          <div className="text-center">
            <p className="text-sm mb-2">© {new Date().getFullYear()} OrionOS. All rights reserved.</p>
            <p className="text-sm flex items-center justify-center">
              Dikembangkan dengan <FaHeart className="text-red-500 mx-1" /> oleh
              <a href="https://github.com/romiyusnandar"
              className="ml-1"
              target="_blank">
                romi.<span className="text-cyan-500">yusna</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;