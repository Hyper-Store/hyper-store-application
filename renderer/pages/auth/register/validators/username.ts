import { FieldValues, RegisterOptions } from "react-hook-form";

export const UsernameValidator: RegisterOptions<FieldValues, string> = {
    required: { value: true, message: 'Nome de usuário é obrigatório' },
    pattern: { value: /^[a-zA-Z0-9]+$/, message: 'Nome de usuário não pode conter caractéres especiais ^[a-zA-Z0-9]+$' },
}