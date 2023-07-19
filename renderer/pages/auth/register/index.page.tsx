import React, { useState } from 'react';
import { Form } from '../../../components/Form';
import { Section } from '../@shared/components/Section';
import { Header } from '../@shared/components/Header';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { EmailValidator, PasswordValidator, UsernameValidator } from '../@shared/validators';
import { RegisterService } from './services/register.service';
import { useRouter } from 'next/router';

export default function AuthLoginPage() {

    const { push } = useRouter();
    const { handleSubmit, setError, control, formState: { errors, isSubmitting }, } = useForm();


    const onSubmit = handleSubmit(async (data) => {
        try {
            const request = await RegisterService(data);

            if (request.status === 201) {
                toast.success('Conta criada com sucesso, estamos te rendirecionando para outra página!', { duration: 10000 })

                await push('/dashboard/main');
                return;
            }

            if (request.data.error.name === "UsernameAlreadyRegisteredError") {
                setError('username', { type: 'value', message: 'Já existe outro usuário cadastrado utilizando este mesmo nome de usuário!' })
                return;
            }

            if (request.data.error.name === "EmailAlreadyRegisteredError") {
                setError('email', { type: 'value', message: 'Já existe outro usuário cadastrado utilizando este mesmo e-mail!' })
                return;
            }

            if (request.status !== 201 && !request.data?.error) {
                toast.error(`O servidor retornou um erro do codigo ${request.status}`)
                return;
            }
        } catch (error) {
            toast.error(`Houve um erro no sevidor, tente novamente mais tarde! Codigo de erro: ${error.message}`)
        }
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
