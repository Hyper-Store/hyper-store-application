import { FieldValues, RegisterOptions } from "react-hook-form";

export const EmailValidator: RegisterOptions<FieldValues, string> = {
    required: { value: true, message: 'Senha é obrigatório' },
    minLength: {
        value: 8,
        message: 'O mínimo para o tamanho da senha é 8 caractéres'
    }
}