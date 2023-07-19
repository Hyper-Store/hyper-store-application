import { FieldValues, RegisterOptions } from "react-hook-form";

export const PasswordValidator: RegisterOptions<FieldValues, string> = {
    required: { value: true, message: 'Senha é obrigatório' },
    minLength: {
        value: 8,
        message: 'O mínimo para o tamanho da senha é 8 caractéres'
    },
    pattern: {
        value: /^(?=.*[A-Z])(?=.*\d).+/,
        message: 'A senha deve conter pelo menos 1 letra maíuscula e 1 número!'
    }
}