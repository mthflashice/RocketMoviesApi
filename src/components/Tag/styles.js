import styled from 'styled-components';

export const Container = styled.samp`
  margin-right: 8px;
  padding: 5px 16px;

  border-radius: 8px;

  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  
  color: ${({theme}) => theme.COLORS.WHITE};
  background-color: ${({theme}) => theme.COLORS.GRAY_300};
`