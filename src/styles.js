// Styled Components
import styled from 'styled-components';
import {motion} from 'framer-motion';

export const About = styled(motion.div)`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5rem 10rem;
    color: white;
    @media (max-width: 1300px){
        display: block;
        padding: 2rem 2rem;
        text-align: center;
    }
`;

export const Description = styled.div`
    flex: 1;
    z-index: 2;
    padding-right: 5rem;
    @media (max-width: 1300px){
        padding: 0;
        button {
            margin: 2rem 0rem 5rem 0rem;
        }
    }
    h2{
        font-weight: lighter;
    }
    h1{
        font-size: 5.8rem;
    }
`;

export const Image = styled.div`
    z-index: 2;
    flex: 1;
    overflow: hidden;
    img{
        width: 90%;
        height: 94vh;
        object-fit: cover;
    }
`;

export const Hide = styled.div`
    overflow: hidden;
`;

//Frame Animation
export const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 10%;
    width: 100%;
    height: 100vh;
    background: #fffebf;
    z-index: 2;
`;

export const Frame2 = styled(Frame1)`
    background: #ff8efb;
`;

export const Frame3 = styled(Frame1)`
    background: #8ed2ff;
`;

export const Frame4 = styled(Frame1)`
    background: #8effa0;
`;