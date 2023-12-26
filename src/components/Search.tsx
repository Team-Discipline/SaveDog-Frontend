import React from 'react';
import styled from 'styled-components'

const SearchContainer = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  @media screen and (max-width: 823px) {
    display: none;
    width: 0; /* 초기에 숨겨진 상태로 설정 */
  }
`;

const SearchInput = styled.input`
  width: 100%;
  //max-width: 60rem; /* 최대 너비 설정 */
  height: 3rem;
  margin: 0 1rem;
  background: rgba(255, 255, 255, .4);
  border-radius: 5px;
`;


const Search = () => {
  return (
    <SearchContainer>
      {/* Add your search input field and any other necessary elements */}
      <SearchInput
        type="text"
        placeholder="Search..."
        className="py-2 px-3 border border-gray-300 rounded-md"
      ></SearchInput>
      {/* You can add a search icon or button here if needed */}
       <button style={{width: '68px'}}>검색</button>
    </SearchContainer>
  );
};

export default Search;
