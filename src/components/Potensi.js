import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Potensi.css';
import Sapi from '../assets/sapi.jpg'; 
import Kambing from '../assets/kambing.jpg';
import Ayam from '../assets/ayam.jpg';

const potensiVariants = {
  hiddenLeft: { opacity: 0, x: -50 },
  hiddenRight: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const PotensiSection = ({ title, description, imageUrl, isLeft }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start(isLeft ? 'hiddenLeft' : 'hiddenRight');
    }
  }, [controls, inView, isLeft]);

  return (
    <motion.div
      ref={ref}
      className="potensi-section"
      initial={isLeft ? 'hiddenLeft' : 'hiddenRight'}
      animate={controls}
      variants={potensiVariants}
    >
      <img src={imageUrl} alt={title} />
      <div className="potensi-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </motion.div>
  );
};

const Potensi = () => {
  return (
    <div>
      <Header />
      <main className="potensi-main">
        <PotensiSection
          title="Cabai"
          description="Cabai merupakan salah satu komoditas unggulan yang dihasilkan dari Desa Bangeran. Pertanian cabai di desa ini memiliki potensi besar baik dari segi kualitas maupun kuantitas, berkat kondisi alam yang mendukung dan keahlian petani setempat. Cabai yang dihasilkan dari Desa Bangeran memiliki kualitas yang baik, dengan potensi ekonomi yang tinggi dan pasar yang luas."
          imageUrl="https://statik.tempo.co/data/2024/07/30/id_1323333/1323333_720.jpg"
          isLeft={true}
        />
        <PotensiSection
          title="Kacang"
          description="Kacang merupakan salah satu komoditas pertanian utama yang dihasilkan dari Desa Bangeran. Produksi kacang di desa ini memberikan kontribusi penting bagi perekonomian masyarakat, baik untuk konsumsi lokal maupun sebagai komoditas perdagangan ke luar daerah. Kacang yang dihasilkan dari Desa Bangeran merupakan salah satu komoditas pertanian yang berpotensi besar dan bernilai ekonomi tinggi."
          imageUrl="https://cdn.digitaldesa.com/uploads/profil/73.14.11.2009/berita/9ffe8bc6985008de0db10e93ad2939ef.jpg"
          isLeft={false}
        />
        <PotensiSection
          title="Jagung"
          description="Jagung merupakan salah satu hasil pertanian utama di Desa Bangeran yang memiliki peran penting dalam perekonomian desa serta memenuhi kebutuhan pangan lokal. Jagung yang dihasilkan dari desa ini memiliki kualitas baik, berkat dukungan alam dan keterampilan para petani setempat dalam mengelola lahan pertanian. Dengan kondisi alam yang mendukung, teknik budidaya yang tepat, dan adanya inovasi produk olahan, jagung dari Desa Bangeran mampu memenuhi kebutuhan pangan lokal dan menjadi komoditas bernilai ekonomi tinggi."
          imageUrl="https://mediaindonesia.com/cdn-cgi/image/width=800,quality=80,format=webp/https://asset.mediaindonesia.com/news/2024/10/16/1729045200_bc831217ab1a8d08a585.jpg"
          isLeft={true}
        />
        <PotensiSection
          title="Mangga"
          description="Mangga merupakan salah satu komoditas unggulan yang dihasilkan oleh Desa Bangeran. Potensi besar buah mangga dari desa ini tidak hanya memenuhi kebutuhan pasar lokal tetapi juga menjadi sumber pendapatan yang penting bagi masyarakat. Dengan kondisi alam yang mendukung, teknik budidaya yang baik, dan dukungan dari pemerintah serta masyarakat, hasil pertanian mangga di desa ini dapat terus meningkatkan kesejahteraan masyarakat."
          imageUrl="https://gkmdblog.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2023/12/16193752/Blog-Mangga-Indonsia.jpeg"
          isLeft={false}
        />
        <PotensiSection
          title="Sapi"
          description="Peternakan sapi di Desa Bangeran berkembang pesat. Sapi dipelihara untuk diambil daging dan susunya, yang menjadi sumber protein penting bagi masyarakat. Selain itu, sapi juga menjadi sumber pupuk alami bagi lahan pertanian setempat."
          imageUrl={Sapi}
          isLeft={true}
        />
        <PotensiSection
          title="Ayam"
          description="Ayam menjadi salah satu ternak favorit di desa ini. Pemeliharaan ayam untuk telur dan daging menghasilkan produk yang alami dan sehat. Ayam-ayam ini menjadi salah satu komoditas unggulan yang banyak diminati pasar lokal."
          imageUrl={Ayam}
          isLeft={false}
        />
        <PotensiSection
          title="Kambing"
          description="Peternakan kambing tidak hanya menghasilkan daging, tetapi juga susu kambing yang semakin diminati karena manfaat kesehatannya. Selain itu, kambing juga penting dalam acara adat dan keagamaan, meningkatkan permintaan pasar lokal."
          imageUrl={Kambing}
          isLeft={true}
        />
      </main>
    </div>
  );
};

const Header = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false });

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeInOut' } });
    } else {
      controls.start({ opacity: 0, y: -20 });
    }
  }, [controls, inView]);

  return (
    <motion.header
      ref={ref}
      className="header"
      initial={{ opacity: 0, y: -20 }}
      animate={controls}
    >
      <h1>Potensi Unggulan Desa</h1>
      <div className="header-content">
        <p>
          Potensi unggulan meliputi hasil-hasil pertanian seperti jagung, kacang-kacangan, tumbuhan sayuran kelor, cabai, mangga, dan lain-lain. 
        </p>
        <p>
          Di samping pertanian, peternakan seperti sapi, kambing, ayam, atau bebek juga bisa menjadi potensi unggulan di desa ini. 
          Desa Bangeran memiliki sumber daya air yang memadai. 
        </p>
        <p>
          Ini tidak hanya memenuhi kebutuhan pangan lokal tetapi juga dapat dijual ke luar daerah, menambah pendapatan masyarakat. 
        </p>
        <p>
          Dengan pengembangan yang tepat, potensi unggulan Desa Bangeran dapat meningkatkan perekonomian, menyediakan lapangan kerja, 
          dan melestarikan kekayaan budaya serta lingkungan setempat.
        </p>
      </div>
    </motion.header>
  );
};

export default Potensi;