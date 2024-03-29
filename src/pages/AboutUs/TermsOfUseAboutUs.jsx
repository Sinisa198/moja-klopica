import React from 'react';
import Header from '../../components/Header/Header';
import MenuforAboutUs from '../../components/MenuforAboutUs';
import Footer from '../../components/Footer/FooterForRestoran';

const TermsOfUse = () => {
  return (
    <div className='wrapper-termsofuse'>
      <div className='div-for-header'>
        <Header />
        <h3 className='title-for-about'>DUNDA</h3>
        <div className='day-menu'> </div>
      </div>
      <div className='day-menu'>
        <MenuforAboutUs />
      </div>
      <div className='div-for-termsofuse-paragraf'>
        <p className='paragraf-for-termsofuse'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis
          dolor nec dui auctor lobortis. Ut placerat velit eu placerat molestie.
          Suspendisse auctor quis quam in semper. Sed ornare laoreet vulputate.
          Cras sed placerat elit, vitae mattis sapien. Mauris a ex eu eros
          tempor congue. Sed eget lacinia massa, sit amet ullamcorper erat. Nam
          elementum dui ut ante porta venenatis at a dolor. Proin vestibulum
          felis non aliquet posuere. Donec quis pharetra odio. Sed rhoncus
          tellus leo, in elementum turpis iaculis ac. Nullam ut magna felis. Sed
          egestas dui id eleifend ullamcorper. Curabitur nisi lorem, bibendum et
          eleifend et, gravida et erat. Maecenas ac varius ipsum. Nullam blandit
          enim leo, a tristique justo scelerisque sit amet. Sed dui dolor,
          convallis id elementum non, mollis eget massa. Proin et egestas nisi.
          Donec feugiat nibes dictum rutrum. Suspendisse mattis congue elit at
          ullamcorper.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfUse;
