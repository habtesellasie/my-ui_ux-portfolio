import Image from 'next/image';

export default function Home() {
  return (
    <>
      <section>
        <Image
          src='/hero-img-transparent Large.png'
          priority
          width={200}
          height={500}
          alt='hero image'
          className=''
        />
        <p>what is going on</p>
      </section>
      <section></section>
    </>
  );
}
