import styled from "styled-components";
import { Link } from "gatsby";

export const Button = styled(Link)`
background: ${({primary}) => (primary ? 'grey' : 'grey')};
white-space: nowrap;
padding: ${({big}) => (big ? '16px 40px' : '10px 32px')};
color: white;
font-size: ${({big}) => (big ? '20px' : '16px')};
outline: none;
border: none;
min-width: 100px;
cursor: pointer;
text-decoration: none;
transition: 0ms.3s !important;
border-radius: ${({round}) => (round ? '50px' : 'none')};

&:hover {
background: ${({primary}) => (primary ? 'grey' : 'grey')};
transform: translateY(-2px);
}
`
