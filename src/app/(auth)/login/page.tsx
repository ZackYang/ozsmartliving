import loginBg from '@/assets/login-bg.png';
import Login from "../components/auth/login";
import { IoReturnUpBack } from 'react-icons/io5';
import Link from 'next/link';


export default function Component() {
  const styles = {
    loginBg: {
      backgroundImage: `url(${loginBg.src})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      miniHeight: '100%'
    },
    welcomeCard: {
      height: '50lvh'
    }
  }

  return (
    <div className="flex drop-shadow-lg w-full sm:w-4/5 md:w-3/5 flex-row border rounded-lg overflow-hidden bg-white">
      <div className="hidden sm:block sm:w-1/2 md:w-3/5 2xl:w-4/5" style={styles.welcomeCard}>
        <div className="drop-shadow-lg flex flex-col items-center min-h-full justify-center" style={styles.loginBg}>

          <div className="pl-10 md:text-2xl lg:text-4xl font-bold text-white">
            Welcome to <span className='text-teal-500 grayscale-0'>OZ</span>SMART+LIVING
          </div>
        </div>
      </div>
      <div className="w-full sm:w-1/2 md:w-2/5 2xl:w-1/5 m-10 flex flex-col justify-center">
        <Login />
      </div>
    </div>
  );
}