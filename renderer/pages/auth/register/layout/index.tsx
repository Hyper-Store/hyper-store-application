import { BaseSyntheticEvent } from "react"
import { Control, FieldErrors, FieldValues } from "react-hook-form"
import React, { useState } from 'react';
import { Form } from '../../../../components/Form';
import { Section } from '../../@shared/components/Section';
import { Header } from '../../@shared/components/Header';
import { EmailValidator, PasswordValidator, UsernameValidator } from '../../@shared/validators';
import { BiLockAlt, BiUser } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

type Props = {
    onSubmit: (e?: BaseSyntheticEvent<object, any, any>) => Promise<void>,
    control: Control<FieldValues, any>,
    errors: FieldErrors<FieldValues>,
    isSubmitting: boolean
}

export const RegisterLayout = ({ onSubmit, control, errors, isSubmitting }: Props) => {
    return (
        <Section>
            <Header.Root>
                <Header.Title>Criar nova conta</Header.Title>
            </Header.Root>
            <Form.Root onSubmit={onSubmit}>
                <Form.Control>
                    <Form.InputGroup icon={<BiUser />} placeholder="Nome de usuário" disabled={isSubmitting} type='text' name='username' id='username' control={control} rules={UsernameValidator} />
                    {errors.username && (<Form.Error>{errors.username?.message as string}</Form.Error>)}
                </Form.Control>
                <Form.Control>
                    <Form.InputGroup icon={<MdEmail />} placeholder="Endereço de e-mail" disabled={isSubmitting} type='text' name='email' id='email' control={control} rules={EmailValidator} />
                    {errors.email && (<Form.Error>{errors.email?.message as string}</Form.Error>)}
                </Form.Control>
                <Form.Control>
                    <Form.InputGroup icon={<BiLockAlt />} type="password" placeholder="Senha" disabled={isSubmitting} id='password' name='password' control={control} rules={PasswordValidator} />
                    {errors.password && (<Form.Error>{errors.password?.message as string}</Form.Error>)}
                    <Form.Link href="/auth/login">💚 Voltar para login</Form.Link>
                </Form.Control>
                <Form.Button type='submit' isLoading={isSubmitting}>Criar conta</Form.Button>
            </Form.Root>
        </Section >
    )
}