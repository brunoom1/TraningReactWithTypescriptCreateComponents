import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  table {
    min-width: 400px;
    border: solid 1px #ddd;

    thead {
      padding: 4px;
      background-color: #eee;
    }
    tbody {
      th {
        background-color: #ddd;
      }
    }
  }
`;
