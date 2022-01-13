import styled from "@emotion/styled";


const Stylhome = styled.div `

.home {
  width: 100px;
  height: 100px;
  position: absolute;
  };


`;

export const Hero = styled.div`
  width: 100%;
  height: 817px;
  background-image: url('/img/herocover.jpg');
  background-repeat: no-repeat;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 91px 730px;

  Nav {
    grid-column: 1/3;
  }
  .auth-form {
    grid-column: 2/3;
    margin-top: 50px;
    justify-self: center;
  }

  .info-home{
    grid-column: 1/2;
    grid-row: 2/3;
    margin-left: 195px;
    margin-top: 250px;
    justify-self: center;
  }

`;

export default Stylhome;
