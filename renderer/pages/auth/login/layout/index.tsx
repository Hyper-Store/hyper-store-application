import React, { BaseSyntheticEvent, useState } from 'react';
import { PasswordValidator } from '../../@shared/validators';
import { Form } from '../../../../components/Form';
import { Section } from '../../@shared/components/Section';
import { Header } from '../../@shared/components/Header';
import { Control, FieldErrors, FieldValues } from 'react-hook-form';
import { BiLockAlt } from 'react-icons/bi';
import { MdEmail } from 'react-icons/md';

type Props = {
    onSubmit: (e?: BaseSyntheticEvent<object, any, any>) => Promise<void>,
    control: Control<FieldValues, any>,
    errors: FieldErrors<FieldValues>,
    isSubmitting: boolean
}

export const LoginLayout = ({ onSubmit, control, errors, isSubmitting }: Props) => {
    return (
        <Section>
            <Header.Root>
                <Header.Title>Fazer login</Header.Title>
                <Header.Description>Faça seu login na plataforma para continuar...</Header.Description>
            </Header.Root>
            <Form.Root onSubmit={onSubmit}>
                <Form.Control>
                    <Form.InputGroup icon={<MdEmail />} placeholder='Email ou nome de usuário' disabled={isSubmitting} type='text' name='value' id='value' control={control} rules={{ required: { value: true, message: "E-mail ou nome de usuário é obrigatório" } }} />
                    {errors.value && (<Form.Error>{errors.value?.message as string}</Form.Error>)}
                </Form.Control>
                <Form.Control>
                    <Form.InputGroup icon={<BiLockAlt />} type='password' placeholder='Senha' disabled={isSubmitting} id='password' name='password' control={control} rules={PasswordValidator} />
                    {errors.password && (<Form.Error>{errors.password?.message as string}</Form.Error>)}
                    <Form.Link href="/auth/register">💚 Criar nova conta</Form.Link>
                </Form.Control>
                <Form.Button isLoading={isSubmitting}>Fazer login</Form.Button>
            </Form.Root>
        </Section>
    )
}