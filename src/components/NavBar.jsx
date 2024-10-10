import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 10px;
  margin-bottom: 20px;
`;

const HeaderTop = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  align-self: flex-end;
  gap: 20px;
`;

const SearchBox = styled.div`
  > input {
    width: 100px;
    padding: 4px 6px;
    border: none;
    border-bottom: 1px solid #000;
    text-align: center;
    margin-left: 10px;
    &::placeholder {
      opacity: 1;
      transition: all 0.5s;
    }
    &:focus {
      outline: none;
      &::placeholder {
        opacity: 0;
      }
    }
  }
`;

const LoginAuth = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  cursor: pointer;
`;

const Logo = styled.div`
  width: 220px;
  height: 50px;
  cursor: pointer;
  > a > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const MenuArea = styled.div`
  > ul {
    display: flex;
    gap: 20px;
    > li {
      cursor: pointer;
    }
  }
`;

const menuList = [
  "여성",
  "남성",
  "추천",
  "브랜드",
  "랭킹",
  "발매",
  "세일",
  "무탠 슈퍼세일",
];

const NavBar = ({ authenticate, setAuthenticate }) => {
  const navigate = useNavigate();

  const onCheckEnter = (e) => {
    if (e.key === "Enter") navigate(`?q=${e.target.value}`);
  };
  return (
    <Wrapper>
      <HeaderTop>
        <SearchBox>
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder="제품검색" onKeyUp={onCheckEnter} />
        </SearchBox>
        {authenticate ? (
          <LoginAuth onClick={() => setAuthenticate(false)}>
            <FontAwesomeIcon icon={faUser} />
            <span>로그아웃</span>
          </LoginAuth>
        ) : (
          <LoginAuth onClick={() => navigate("/login")}>
            <FontAwesomeIcon icon={faUser} />
            <span>로그인</span>
          </LoginAuth>
        )}
      </HeaderTop>
      <Logo>
        <Link to={"/"}>
          <img
            src="https://www.shinailbo.co.kr/news/photo/202106/1419496_624961_3416.jpg"
            alt="musinsa"
          />
        </Link>
      </Logo>
      <MenuArea>
        <ul>
          {menuList.map((it, idx) => (
            <li key={idx}>
              <a href="#">{it}</a>
            </li>
          ))}
        </ul>
      </MenuArea>
    </Wrapper>
  );
};

export default NavBar;
