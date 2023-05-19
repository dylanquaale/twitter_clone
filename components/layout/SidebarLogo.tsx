import { useRouter } from 'next/router';
import { BsTwitter } from 'react-icons/bs';

const SidebarLogo = () => {
    const router = useRouter();
    return (
        <div
            onClick={() => router.push('/')}
            className='
        rounded-full
        h-14
        w-14
        p-4
        items-center
        justify-center
        hover:bg-sky-800
        hover:bg-opacity-10
        cursor-pointer
        transition
        '>
            <BsTwitter size={28} color='#1D9BF0' />
        </div>
    );
}

export default SidebarLogo