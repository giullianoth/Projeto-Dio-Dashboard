import { Link, useNavigate } from "react-router-dom"
import Header from "../../components/Header"
import { Container } from "../../styles/container"
import { Section } from "../../styles/section"
import { AuthForm, AuthFormText, AuthFormTitle, AuthFormWrapper, AuthLinks, AuthTitle, AuthWrapper, Redirect } from "../Login/styles"
import Input from "../../components/Input"
import { MdEmail, MdLock, MdPerson } from "react-icons/md"
import { PrimaryButton } from "../../styles/button"
import * as yup from "yup"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import api from "../../services/api"

const schema = yup.object({
    name: yup.string().required("Nome é obrigatório"),
    email: yup.string().email("E-mail não é válido").required("E-mail é obrigatório"),
    password: yup.string().min(3, "No mínimo 3 caracteres").required("Senha é obrigatória")
}).required()

const Register = () => {
    const navigate = useNavigate()

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: "onChange"
    })

    const handleSignUp = async formData => {
        try {
            const { data: users } = await api.get(`/users?email=${formData.email}`)

        if (users.length) {
            alert("E-mail já cadastrado")
            return
        }

        const response = await api.post("users", formData)
        
        if (response.status !== 201) {
            alert("Houve um erro, tente novamente.")
            return
        }

        navigate("/feed")
        } catch {
            alert("Houve um erro, tente novamente.")
        }
    }

    return (
        <>
            <Header />

            <main>
                <Section>
                    <Container>
                        <AuthWrapper>
                            <AuthTitle>
                                A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                            </AuthTitle>

                            <AuthFormWrapper>
                                <AuthFormTitle>
                                    Comece agora grátis
                                </AuthFormTitle>

                                <AuthFormText>
                                    Crie sua conta e make the change._
                                </AuthFormText>

                                <AuthForm onSubmit={handleSubmit(handleSignUp)}>
                                    <Input
                                        control={control}
                                        icon={<MdPerson />}
                                        type="text"
                                        name="name"
                                        placeholder="Nome completo"
                                        errorMessage={errors?.name?.message} />

                                    <Input
                                        control={control}
                                        icon={<MdEmail />}
                                        type="email"
                                        name="email"
                                        placeholder="E-mail"
                                        errorMessage={errors?.email?.message} />

                                    <Input
                                        control={control}
                                        icon={<MdLock />}
                                        type="password"
                                        name="password"
                                        placeholder="Senha"
                                        errorMessage={errors?.password?.message} />

                                    <PrimaryButton type="submit">Criar minha conta</PrimaryButton>
                                </AuthForm>

                                <AuthFormText>
                                    Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
                                </AuthFormText>

                                <AuthLinks>
                                    <span>
                                        Já tenho uma conta. <Redirect as={Link} to="/login">Fazer login</Redirect>
                                    </span>
                                </AuthLinks>
                            </AuthFormWrapper>
                        </AuthWrapper>
                    </Container>
                </Section>
            </main>
        </>
    )
}

export default Register