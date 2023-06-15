import styled from 'styled-components';

export const FormContainerCSS = styled.form`
  width: 300px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  box-shadow: inset 2px 2px 5px rgba(154, 147, 140, 0.5),
    1px 1px 5px rgba(255, 255, 255, 1);
`;

export const FormInputCSS = styled.input`
  display: block;
  width: 100%;
  height: calc(2.25rem + 2px);
  padding: 0.375rem 0.75rem;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #bdbdbd;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &::placeholder {
    color: #212529;
    opacity: 0.4;
  }
  &:focus {
    color: #212529;
    background-color: #fff;
    border-color: #bdbdbd;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(158, 158, 158, 0.25);
  }
  &:disabled {
    background-color: #f5f5f5;
    opacity: 1;
  }
`;

export const ContainerCSS = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  font-size: 2em;
  font-weight: 700;
  margin-bottom: 10px;
`;
