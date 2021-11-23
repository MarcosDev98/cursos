import Link from 'next/link';
import Image from 'next/image';
import Coffe from '../public/coffe.png';

export default function Home() {
  return (
    <div>
      <Link href="/chanchitos">Ir a chanchitos</Link>
      <p>chanchito feliz</p>
      {/* <Image src="/coffe.png" width={400} height={400} /> */}
      <Image src={Coffe} width={400} height={400} />
    </div>
  );
};
