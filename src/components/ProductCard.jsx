import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;
`;

const Img = styled.img`
  width: 300px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const ProductCard = ({ item }) => {
  const formattedPrice = new Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency: "KRW",
  }).format(item?.price);

  const nevigate = useNavigate();
  const showDetail = () => {
    nevigate(`product/${item.id}`);
  };

  return (
    <>
      <Wrapper onClick={showDetail}>
        <Img src={item?.img} />
        <div>Conscious Choice</div>
        <div>{item && item?.title}</div>
        <div>{formattedPrice}</div>
        <div>{item.new && item?.new === true ? "신제품" : "이벤트상품"}</div>
      </Wrapper>
    </>
  );
};

export default ProductCard;
