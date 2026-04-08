import { InputContainer, InputElement, InputIcon } from "./style"

const Input = ({ icon, ...rest }) => {
  return (
    <InputContainer>
      {icon && <InputIcon>{icon}</InputIcon>}
      <InputElement {...rest} />
    </InputContainer>
  )
}

export default Input