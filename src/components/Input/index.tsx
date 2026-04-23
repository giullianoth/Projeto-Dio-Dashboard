import type { InputHTMLAttributes, ReactNode } from "react"
import { InputContainer, InputElement, InputError, InputIcon } from "./style.jsx"
import { Controller, type Control, type FieldValues, type Path } from "react-hook-form"

interface Props<T extends FieldValues> extends InputHTMLAttributes<HTMLInputElement> {
  control: Control<T>
  name: Path<T>
  icon?: ReactNode
  errorMessage?: string
}

const Input = <T extends FieldValues>({ icon, control, errorMessage, name, ...rest }: Props<T>) => {
  return (
    <label>
      <InputContainer>
        {icon && <InputIcon>{icon}</InputIcon>}

        <Controller
          name={name}
          control={control}
          rules={{ required: true }}
          render={({ field }) => <InputElement {...field} {...rest} />} />
      </InputContainer>

      {errorMessage && <InputError>{errorMessage}</InputError>}
    </label>
  )
}

export default Input