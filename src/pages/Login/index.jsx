import { MdEmail } from "react-icons/md"
import Header from "../../components/Header"
import Input from "../../components/Input"
import { Container } from "../../styles/container"
import { Section } from "../../styles/section"
import { AuthForm, AuthFormText, AuthFormTitle, AuthFormWrapper, AuthLinks, AuthTitle, AuthWrapper, Forgot, Redirect } from "./styles"
import { PrimaryButton } from "../../styles/button"
import { Link } from "react-router-dom"

const Login = () => {
    const handleSubmit = event => {
        event.preventDefault()
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
                                    Faça seu cadastro
                                </AuthFormTitle>

                                <AuthFormText>
                                    Faça seu login e make the change._
                                </AuthFormText>

                                <AuthForm onSubmit={handleSubmit}>
                                    <Input
                                        icon={<MdEmail />}
                                        type="email"
                                        name="email"
                                        placeholder="E-mail" />

                                    <Input
                                        icon={<MdEmail />}
                                        type="password"
                                        name="password"
                                        placeholder="Senha" />

                                    <PrimaryButton type="submit">Entrar</PrimaryButton>
                                </AuthForm>

                                <AuthLinks>
                                    <Forgot href="#">Esqueci minha senha</Forgot>
                                    <Redirect as={Link} to="/cadastrar">Criar conta</Redirect>
                                </AuthLinks>
                            </AuthFormWrapper>
                        </AuthWrapper>
                    </Container>
                </Section>
            </main>
        </>
    )
}

export default Login