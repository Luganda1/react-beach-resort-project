import styled from "styled-components";
import defaultImg from "../images/room-1.jpeg";

//eg  const teal = "#fcf"
// const simpleButton = styled.button `
// color: ${teal};
// background: green;
// font-size: 3rem;
// `
const StyledHero = styled.header`
    min-height: 60vh;
    display: flex;
    /* background: url(${defaultImg}) center/cover no-repeat; */
    background: url(${props => props.img ? props.img: defaultImg}) center/cover no-repeat;
    align-items: center;
    justify-content: center;

`

export default StyledHero;