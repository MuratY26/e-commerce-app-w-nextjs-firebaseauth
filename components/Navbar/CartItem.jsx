import { HiShoppingBag } from "react-icons/hi";
import  Link  from "next/link";
import styled from "styled-components";

const CartItemWrapper = styled.button`
  background: none;
  font-size: 30px;
  position: relative;
  cursor: pointer;
  color: #f5f3f4;
  border: none;
  &:hover{
    color: #a4161a;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    color: white;
    position: absolute;
    top: 45%;
    right: 0px;
    font-size: 10px;
    border: none;
    border-radius: 50%;
    background-color: #e5383b;
    width: 15px;
    height: 15px;
  }
`;

const CartItem = ({ count = 0 }) => {
  const countRendered = count > 9 ? "+9" : count;
  return (
    <Link href={"/checkout"}>
      <CartItemWrapper>
        <HiShoppingBag /> <span>{countRendered}</span>
      </CartItemWrapper>
    </Link>
  );
};

export default CartItem;
