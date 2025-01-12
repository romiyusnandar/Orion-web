import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaTelegram, FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link href="https://github.com/orionos-prjkt" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 transition-colors">
              <FaGithub size={24} />
            </Link>
            <Link href="https://t.me/OrionOS_prjkt" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 transition-colors">
              <FaTelegram size={24} />
            </Link>
          </div>
          <div className="text-center md:text-left">
            <p className="text-sm mb-2">© {new Date().getFullYear()} OrionOS. All rights reserved.</p>
            <p className="text-sm flex items-center justify-center md:justify-start">
              Maintained with <FaHeart className="text-red-500 mx-1" /> by
              <a href="https://github.com/romiyusnandar" className="ml-1 text-cyan-500 hover:underline" target="_blank" rel="noopener noreferrer">
                romi.yusna
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;