import React, { useState } from 'react';
import { Form } from '../../../components/Form';
import { Section } from '../@shared/components/Section';
import { Header } from '../@shared/components/Header';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { EmailValidator, PasswordValidator, UsernameValidator } from '../@shared/validators';

export default function AuthLoginPage() {
    const { handleSubmit, control, formState: { errors, isSubmitting }, } = useForm();


    const onSubmit = handleSubmit(async (data) => {

        return new Promise(resolve => {
            setTimeout(() => {
                resolve('a');
                toast.error('As credênciais estão inválidas, tente novamente!')
            }, 2000);
        });
    })

    return (
        <Section>
            <Header.Root>
                <Header.Title>Criar nova conta</Header.Title>
            </Header.Root>
            <Form.Root onSubmit={onSubmit}>
                <Form.Control>
                    <Form.Label htmlFor='username'>Nome de Usuário</Form.Label>
                    <Form.Input disabled={isSubmitting} type='text' name='username' id='username' control={control} rules={UsernameValidator} />
                    {errors.username && (<Form.Error>{errors.username?.message as string}</Form.Error>)}
                </Form.Control>
                <Form.Control>
                    <Form.Label htmlFor='email'>E-mail</Form.Label>
                    <Form.Input disabled={isSubmitting} type='text' name='email' id='email' control={control} rules={EmailValidator} />
                    {errors.email && (<Form.Error>{errors.email?.message as string}</Form.Error>)}
                </Form.Control>
                <Form.Control>
                    <Form.Label htmlFor='password'>Senha</Form.Label>
                    <Form.InputPassword disabled={isSubmitting} id='password' name='password' control={control} rules={PasswordValidator} />
                    {errors.password && (<Form.Error>{errors.password?.message as string}</Form.Error>)}
                    <Form.Link href="/auth/login">💚 Voltar para login</Form.Link>
                </Form.Control>
                <Form.Button type='submit' isLoading={isSubmitting}>Criar conta</Form.Button>
            </Form.Root>
        </Section >
    )
};
