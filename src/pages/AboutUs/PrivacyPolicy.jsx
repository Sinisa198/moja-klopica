import React from 'react';
import Footer from '../../components/Footer/FooterForRestoran';
import Header from '../../components/Header/Header';
import MenuforAboutUs from '../../components/MenuforAboutUs';

const PrivacyPolicy = () => {
  return (
    <div className='div-for-header'>
      <Header />
      <h3 className='title-for-about'>DUNDA</h3>
      <div className='day-menu'>
        <MenuforAboutUs />
      </div>
      <div className='privacy-wrapper'>
        <p className='title-privacy'>MOJA KLOPICA Obaveštenje o privatnosti</p>
        <div className='div-for-privacy-text'>
          <p className='paragraf-privacy'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            quis dolor nec dui auctor
            <br /> lobortis. Ut placerat velit eu placerat molestie. Suspendisse
            auctor quis quam in semper. Sed
            <br /> ornare laoreet vulputate. Cras sed placerat elit, vitae
            mattis sapien. Mauris a ex eu eros tempor
            <br /> congue. Sed eget lacinia massa, sit amet ullamcorper erat.
            Nam elementum dui ut ante porta <br />
            venenatis at a dolor. Proin vestibulum felis non aliquet posuere.
            Donec quis pharetra odio. Sed
            <br /> rhoncus tellus leo, in elementum turpis iaculis ac. Nullam ut
            magna felis. Sed egestas dui id <br />
            eleifend ullamcorper. Curabitur nisi lorem, bibendum et eleifend et,
            gravida et erat.
            <br /> Maecenas ac varius ipsum. Nullam blandit enim leo, a
            tristique justo scelerisque sit amet. Sed <br />
            dui dolor, convallis id elementum non, mollis eget massa. Proin et
            egestas nisi. Donec feugiat
            <br /> nibh quis arcu rutrum efficitur. Nam eget venenatis odio, at
            mattis lectus. Donec commodo id
            <br />
            metus a tristique. Vestibulum at dui quis risus
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
