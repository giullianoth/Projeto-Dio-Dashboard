import { InputContainer, InputElement, InputError, InputIcon } from "./style"
import { Controller } from "react-hook-form"

const Input = ({ icon, control, errorMessage, ...rest }) => {
  return (
    <label>
      <InputContainer>
        {icon && <InputIcon>{icon}</InputIcon>}

        <Controller
          name={rest.name}
          control={control}
          rules={{ required: true }}
          render={({ field }) => <InputElement {...field} {...rest} />} />
      </InputContainer>

      {errorMessage && <InputError>{errorMessage}</InputError>}
    </label>
  )
}

export default Input