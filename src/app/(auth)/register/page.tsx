import { Card } from "flowbite-react";
import Register from "../components/auth/register";
import registerBg from '@/assets/register-bg.png';
import Image from "next/image";


export default function Component() {
  const styles = {
    registerBg: {
      backgroundImage: `url(${registerBg.src})`,
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
    <div className="flex drop-shadow-lg w-full m-10 flex-row border rounded-lg overflow-hidden bg-white">
      <div className="md:w-3/5 lg:w-4/5 xl:w-5/6" style={styles.welcomeCard}>
        <div className="drop-shadow-lg flex flex-col items-center min-h-full justify-center" style={styles.registerBg}>
          <div className="pl-10 text-4xl font-bold text-white">
            Welcome to <span className='text-teal-500 grayscale-0'>OZ</span>SMART+LIVING
          </div>
        </div>
      </div>
      <div className="md:w-2/5 lg:w-1/5 xl:w-1/6 m-10 flex flex-col justify-center">
        <Register />
      </div>
    </div>
  );
}