import Header from '@/components/website/header';
import HeroSec from '@/components/website/hero-sec';
import Footer from '@/components/website/footer';
import SnowfallEffect from '@/components/website/snowfall-effect';
// import AnimatedShaderBackground from '@/components/ui/animated-shader-background';


export default function Home() {
  return (
    <>
      <SnowfallEffect />
      {/* <AnimatedShaderBackground /> */}
      <Header />
      <main className='relative'>
        <HeroSec />
      </main>
      <Footer/>
    </>
  );
}
