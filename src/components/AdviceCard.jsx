import React, { useEffect, useState } from 'react';
import { AdviceCardStyled } from './styles/AdviceCard.styled';
import Divisor from './Divisor';
import Dice from './Dice';

const AdviceCard = () => {
   const [advice, setAdvice] = useState('');
   const [adviceId, setAdviceId] = useState('')
   const [isLoading, setIsLoading] = useState(true);

   const fetchAdvice = () => {
      fetch('https://api.adviceslip.com/advice')
         .then((res) => res.json())
         .then((data) => {
            setAdvice(data.slip.advice);
            setAdviceId(data.slip.id)
            setIsLoading(false);
         });
   };

   useEffect(() => {
      fetchAdvice();
   }, []);
   return (
      <AdviceCardStyled>
         <h1>Advice #{adviceId}</h1>
         {isLoading ? (
            <p>Loading...</p>
         ) : (
            <p>"{advice}"</p>
         )}
         <Divisor />
         <Dice onClick={fetchAdvice} />
      </AdviceCardStyled>
   );
};

export default AdviceCard;
