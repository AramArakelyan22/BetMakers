import React from 'react';
import { Field } from 'react-final-form';
import styled from 'styled-components';

const Input = styled.input`
  border-radius: 10px;
  background-color: #e8eff1;
  border: ${({touched, error}) => touched && error ? '1px solid red' : 'none'}  
  opacity: 0.7;
  font-family: Montserrat;
  font-size: 15px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: 0.1px;
  text-align: left;
  color: #000000;
  width: 285px;
  height: 39px;
  box-sizing: border-box;
  padding: 5px 15px;
  &:focus {
  border-radius: 10px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  outline: none;
  border: 1px solid #7632ff;
`;

const Span = styled.span`
  display: block;
  width: 280px;
  height: 16px;
  opacity: 0.7;
  font-family: Montserrat;
  font-size: 13px;
  font-weight: normal;
  font-style: italic;
  font-stretch: normal;
  line-height: 1.54;
  letter-spacing: 0.1px;
  text-align: left;
  color: #000000;
  margin-left: 6px
`;

const Label = styled.label`
  opacity: 0.7;
  font-family: Montserrat;
  font-size: 15px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: 0.1px;
  text-align: left;
  color: #000000;
  display: block;
  margin-left: 7px
 `;
const ErrorSpan = styled.span`
  display: block; 
  color: red; 
  font-size: 13px; 
  margin-top: 5px
`;

const FieldWrapper = styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: center; 
  align-items: center; 
  margin-top: 10px;
`

const InputField = props => {
  const {
    info,
    name,
    type,
    label,
    placeholder
  } = props;

  return(
    <Field name={name}>
      {({ input, meta }) => {
        return (
          <FieldWrapper>
            <div>
              {label ? <Label htmlFor={name}>{label}</Label>
                : null
              }
              {info ?
                <Span >{info}</Span> : null}
              <Input
                {...input}
                {...meta}
                type={type}
                id={name}
                placeholder={placeholder}
              />
              {meta.error && meta.touched && <ErrorSpan >{meta.error}</ErrorSpan>}
            </div>
          </FieldWrapper>
        )}}
    </Field>
  )};

export default InputField