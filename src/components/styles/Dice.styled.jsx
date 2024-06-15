import styled from 'styled-components';

export const DiceStyled = styled.button`
   position: absolute;
   bottom: -32px;
   background-color: ${({ theme }) => theme.NeonGreen};
   display: flex;
   padding: 1.25rem;
   border-radius: 200px;
   border: none;
   cursor: pointer;
   transition: 0.2s;

   &:hover {
      box-shadow: 0px 0px 35px 2px ${({ theme }) => theme.NeonGreen};
   }
`;
