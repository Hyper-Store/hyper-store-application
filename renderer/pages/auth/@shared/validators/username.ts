import { FieldValues, RegisterOptions } from "react-hook-form";

export const UsernameValidator: RegisterOptions<FieldValues, string> = {
    required: { value: true, message: 'Nome de usuário é obrigatório' },
    pattern: { value: /^[a-zA-Z0-9]+$/, message: 'Nome de usuário não pode conter caractéres especiais ^[a-zA-Z0-9]+$' },
    minLength: {
        value: 3,
        message: 'O nome de usuário deve conter pelo menos 3 caractéres no minimo'
    },
    maxLength: {
        value: 20,
        message: 'O nome de usuário deve conter no máximo de 20 caractéres'
    }
}