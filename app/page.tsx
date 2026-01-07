import Header from '@/components/website/header';
import HeroSec from '@/components/website/hero-sec';
import Footer from '@/components/website/footer';
import SnowfallEffect from '@/components/website/snowfall-effect';


export default function Home() {
  return (
    <>
      <Header />
      <SnowfallEffect />
      <main className='relative'>
        <HeroSec />
      </main>
      <Footer/>
    </>
  );
}
