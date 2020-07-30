import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  width: 100%;
  color: #666360;
  
  display: flex;
  align-items: center;
  
  & + div { 
    margin-top: 8px;
  }

  select {
    flex: 1;
    background: transparent;
    border: 0;
    color: #666360;

    
  }

  select::after {
    background: transparent;
  }

  option {
      background: transparent;

      &:hover {
        background: ${shade(0.2, '#ff9000')};
      }
    }

  svg {
    margin-right: 16px;
  }
`;