import styled from "styled-components";

const Page = styled.div`
  @media screen and (max-width: 400px){
    margin: 0;
  }
  @media screen and (min-width: 400px) and (max-width: 1400px){
    margin: 2em;
  }
  @media screen and (min-width: 1400px){
    max-width: 1400px;
    margin: 0 auto;
  }
`

export default Page;
