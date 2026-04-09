import { Link, useNavigate } from "react-router-dom"
import Header from "../../components/Header"
import { Container } from "../../styles/container"
import { Section } from "../../styles/section"
import { AuthForm, AuthFormText, AuthFormTitle, AuthFormWrapper, AuthLinks, AuthTitle, AuthWrapper, Redirect } from "../Login/styles"
import Input from "../../components/Input"
import { MdEmail, MdLock, MdPerson } from "react-icons/md"
import { PrimaryButton } from "../../styles/button"

const Register = () => {
    const navigate = useNavigate()

    const handleSubmit = event => {
        event.preventDefault()
        navigate("/feed")
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

                                <AuthForm onSubmit={handleSubmit}>
                                    <Input
                                        icon={<MdPerson />}
                                        type="text"
                                        name="name"
                                        placeholder="Nome completo" />

                                    <Input
                                        icon={<MdEmail />}
                                        type="email"
                                        name="email"
                                        placeholder="E-mail" />

                                    <Input
                                        icon={<MdEmail />}
                                        type="email"
                                        name="email"
                                        placeholder="E-mail" />

                                    <Input
                                        icon={<MdLock />}
                                        type="password"
                                        name="password"
                                        placeholder="Senha" />

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