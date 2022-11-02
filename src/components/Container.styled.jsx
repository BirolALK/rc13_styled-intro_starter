import styled from 'styled-components';

const Container = styled.div`
background:${({bg}) => bg || "white"};
display: flex;
flex-direction: colum;
justify-content: center;
align-items: center;
padding: 1rem;
`;

export default Container;
