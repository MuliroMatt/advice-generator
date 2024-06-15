import React from 'react';
import DivisorDesktop from '../assets/images/pattern-divider-desktop.svg';
import DivisorMobile from '../assets/images/pattern-divider-mobile.svg';

const Divisor = () => {
   return (
      <picture>
         <source media='(min-width: 536px)' srcSet={DivisorDesktop} />
         <source media='(max-width: 535px)' srcSet={DivisorMobile} />
         <img src={DivisorDesktop}/>
      </picture>
   );
};

export default Divisor;
