import React, { useEffect, useState } from "react";
import {
  Col,
  Container,
  Dropdown,
  DropdownMenu,
  Row,
  Button,
} from "react-bootstrap";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Img = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const ProductDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 20px;
  padding: 10px;
`;

const ProductTitle = styled.div`
  font-weight: 600;
`;

const ProductPrice = styled.div`
  font-size: 16px;
`;

const ProductChoice = styled.div``;

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  const getProductDetail = async () => {
    const url = `http://localhost:3000/products/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    setProduct(data);
  };

  const formattedPrice = new Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency: "KRW",
  }).format(product?.price);

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <Img src={product && product?.img} alt={product?.id} />
        </Col>
        <Col>
          <ProductDesc>
            <ProductTitle>상품명 : {product && product?.title}</ProductTitle>
            <ProductPrice>상품가격 : {formattedPrice}</ProductPrice>
            <ProductChoice>
              {product && product?.choice ? "Conscious Choice" : ""}
            </ProductChoice>

            <Dropdown>
              <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                사이즈 선택
              </Dropdown.Toggle>
              <DropdownMenu>
                {product &&
                  product?.size.length > 0 &&
                  product.size.map((it, idx) => (
                    <Dropdown.Item href="#/action-1" key={idx}>
                      {it}
                    </Dropdown.Item>
                  ))}
              </DropdownMenu>
            </Dropdown>
            <Button variant="dark">장바구니</Button>
            <Button variant="warning">상품결제</Button>
          </ProductDesc>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
