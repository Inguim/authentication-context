import styled from "styled-components";

export const Content = styled.section`
  margin-left: auto;
  margin-right: auto;
  align-self: center;

  h1 {
      text-align: center;
      margin-bottom: 20px;
      font-weight: bold;
  }

  a {
      text-decoration: none;
      color: var(--blue-mustang);
      padding: 10px;
      background: var(--form-left);
      margin-bottom: 5px;

      :hover {
        color: var(--form-left);
        background: var(--blue-mustang);
      }
  }

  a + button {
    margin-top: 20px;
  }
`;
