import styled from "@emotion/styled";

const Nav = styled.nav`
 
 @media only screen and (min-width: 961px) {
    flex: 100%;
    justify-content: space-between;
    font-family: "Montserrat", sans-serif;
   };
   
   .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 10%;
    color: white;
  };

  .nav_links {
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    text-decoration: none;
    list-style: none;
  }

  .nav_links li {
    display: inline-block;
    padding: 0px 21px;
  }

  // mobile version
   @media only screen and (max-width: 480px) {
    flex: 100%;
    display: flex;
  };

`;

export default Nav;
