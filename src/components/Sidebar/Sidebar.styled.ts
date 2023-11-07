import styled from 'styled-components';

export const SidebarStyled = styled.aside`
  height: 100%;
  width: var(--aside-width, 220px);
  margin-left: 30px;
  margin-right: 30px;
  background-color: ${(props) => props.theme.colors.background.aside};;
`;
