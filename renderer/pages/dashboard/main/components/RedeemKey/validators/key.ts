import { FieldValues, RegisterOptions } from "react-hook-form";

export const KeyValidator: RegisterOptions<FieldValues, string> = {
    required: { value: true, message: 'A key deve ser inserida para resgatar' },
    minLength: {
        value: 1,
        message: 'O tamanho mínimo para a key é 1 caractéres'
    },
    maxLength: {
        value: 30,
        message: 'O tamanho máximo para a key é 30 caractéres'
    }
}