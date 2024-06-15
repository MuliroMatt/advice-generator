import styled from 'styled-components';

export const AdviceCardStyled = styled.section`
   background-color: ${({ theme }) => theme.DarkGrayishBlue};
   width: 90%;
   max-width: 540px;
   padding: 3.25rem 3.25rem 4.5rem;
   display: flex;
   flex-direction: column;
   align-items: center;
   border-radius: 16px;
   position: relative;

   h1{
    color: ${({ theme})=> theme.NeonGreen};
    text-transform: uppercase;
    font-size: .75rem;
    font-weight: 700;
    letter-spacing: 4.5px;
    margin-bottom: 1.75rem;
   }

   p{
    color: ${({ theme }) => theme.LightCyan};
    font-weight: 700;
    font-size: 28px;
    text-align: center;
    line-height: 130%;
    margin-bottom: 2.5rem;
   }
`;
