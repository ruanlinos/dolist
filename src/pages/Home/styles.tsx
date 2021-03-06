import styled from 'styled-components';
import { MdEventAvailable } from 'react-icons/md';
import { Modal as AntdModal } from 'antd';
import CheckBoxAnimated from 'react-animated-checkbox';
import { Form as Unform } from '@unform/web';
import colors from '../../styles/colors';

interface ButtonProps {
  active: boolean;
}

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  height: 100vh;
`;
export const Wrapper = styled.div`
  max-width: 600px;
  margin-top: 121px;
`;
export const Title = styled.h1`
  margin: 30px 0 20px 0;
`;
export const SubTitle = styled.h2``;

export const Author = styled.div`
  display: flex;
  align-items: center;
  color: ${colors.DarkGray};
`;
export const Person = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 31px;
  border: 3px solid #eae9f2;
  box-sizing: border-box;
  border-radius: 34px;
  margin-left: 6px;
  p {
    font-weight: bold;
    font-size: 12px;
    line-height: 15px;
    color: #45475d;
    margin-bottom: 0;
  }
`;
export const Content = styled.div``;
export const Footer = styled.div`
  margin-top: 223px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Todo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  line-height: 23px;
  margin-bottom: 0 !important;
  p {
    margin-bottom: 0;
  }
`;
export const CreatedAt = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  small {
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    color: ${colors.DarkGray};
  }
`;
export const Calendar = styled(MdEventAvailable)`
  margin: 0 20px 0 5px;
`;
export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 24px 0 56px 0;
  p {
    font-weight: bold;
    margin-bottom: 0 !important;
  }
`;

export const Modal = styled(AntdModal)`
  .ant-modal-close-x {
    display: none;
  }
  .ant-modal-content {
    width: 100%;
    max-width: 757px;
    max-height: 204px;
  }
  .ant-modal-header {
    border-bottom: 1px solid transparent;
  }
  border-bottom: none;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-style: normal;
    font-weight: bold;
    font-size: 23px;
    line-height: 29px;
    color: ${colors.Blue};
  }

  .ant-modal-footer {
    border-top: none;
  }
  .ant-modal-body {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 0;
    width: 100%;
    form {
      width: 100%;
    }
    .ant-input {
      border: none;
      border-bottom: 1px solid #26158f;
      border-radius: 0;
    }
  }
`;

export const AddButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  background: ${colors.Blue};
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: none;
`;

export const Filter = styled.button<ButtonProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  background: none;
  border: none;

  &:nth-child(2) {
    padding: 0 50px;
  }
`;

export const CheckBox = styled(CheckBoxAnimated)``;

export const Form = styled(Unform)`
  display: flex;
  width: 100%;
  max-width: 638px !important;
  border-bottom: 1px solid #26158f;
  button {
    border: none;
    background: none;
  }
`;
