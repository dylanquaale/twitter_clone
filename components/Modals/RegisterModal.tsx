import useLoginModal from '@/hooks/useLoginModal';
import useRegisterModal from '@/hooks/useRegisterModal';
import { useState, useCallback } from 'react';
import Input from '../Input';
import Modal from '../Modal';
import axios from 'axios';
import { toNamespacedPath } from 'node:path/win32';
import toast from 'react-hot-toast'
import { signIn } from 'next-auth/react'

const RegisterModal = () => {
    const loginModal = useLoginModal();
    const registerModal = useRegisterModal();

    const [email, setEmail] = useState(' ');
    const [password, setPassword] = useState(' ');
    const [name, setName] =useState(' ');
    const [username, setUsername] = useState(' ');
    const [isLoading, setIsLoading] = useState(false);

    const onToggle = useCallback(() => {
      if (isLoading) {
        return;
      }

      registerModal.onClose();
      loginModal.onOpen();
    }, [isLoading, registerModal, loginModal])

    const onSubmit = useCallback(async () => {
        try {
        setIsLoading(true);
        // ToDO login and register
          // defined in register.ts is where we get this from
        await axios .post('/api/register', {
          email,
          password,
          username,
          name
        });

        toast.success('Account Created');

        signIn('credntials', {
          email,
          password
        });

        registerModal.onClose();
        } catch(error) {
            console.log(error)
            toast.error('Somethings Wrong');
        } finally {
            setIsLoading(false);
        }
    }, [registerModal, email, password, username, name ]);

    const bodyContent = (
        <div className=' flex flex-col gap-4'>
            <Input 
            placeholder='Email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            disabled={isLoading}
            />
             <Input 
        disabled={isLoading}
        placeholder="Name" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <Input 
        disabled={isLoading}
        placeholder="Username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input 
        disabled={isLoading}
        placeholder="Password" 
        type="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
    )

    const footerContent = (
      <div className='text-neutral-400 text-center mt-4'>
        <p>Already have an account?
          <span
          onClick={onToggle}
          className='
            text-white
            cursor-pointer
            hover:underline
          '>
            Sign In
          </span>
          </p> 

      </div>

    )

    return( 
        <Modal
        disabled={isLoading}
        isOpen={registerModal.isOpen}
        title='Create an account'
        actionLabel='Register'
        onClose={registerModal.onClose}
        onSubmit={onSubmit}
        body={bodyContent}
        footer={footerContent}
        />
    )
}

export default RegisterModal