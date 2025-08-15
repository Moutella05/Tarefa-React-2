import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import Image from "../../assets/Image_Login.png";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const userSchema = z.object({
    email: z.string().email("Email inválido").nonempty("Email é obrigatório"),
    password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres").nonempty("Senha é obrigatória"),
  });

type User = z.infer<typeof userSchema>;

export default function Login() {
  const [emailFocus, setEmailFocus] = useState(false);
  const [senhaFocus, setSenhaFocus] = useState(false);
  const navigate = useNavigate();

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<User>({
    resolver: zodResolver(userSchema),
  });
  async function createUser(data : User) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Dados do formulário:", data);
    reset();
    navigate("/");
  }

  return (
    <div className="Divisoria">
      <div className="Image">
        <img src={Image} alt="Login Background" />
      </div>
      <div className="Form">
        <img src={Logo} alt="Logo" />
        <form onSubmit={handleSubmit(createUser)}>
          <h2>Bem Vindo (a)!</h2>
          <h1>Entre na sua conta</h1>
          <h4>Email</h4>
          <input
            type="email"
            placeholder="Digite aqui seu e-mail"
            style={
              emailFocus
                ? { border: "3px solid #EF6B4A", borderRadius: "4px" }
                : {}
            }
            {...register("email")}
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
          />
          {errors.email && <span>{errors.email.message}</span>}
          <h4>Senha</h4>
          <input
            type="password"
            placeholder="Digite aqui sua senha"
            style={
              senhaFocus
                ? { border: "3px solid #EF6B4A", borderRadius: "4px" }
                : {}
            }
            {...register("password")}
            onFocus={() => setSenhaFocus(true)}
            onBlur={() => setSenhaFocus(false)}
          />
          {errors.password && <span>{errors.password.message}</span>}
          <button disabled={isSubmitting} id="botao" type="submit">{isSubmitting ? "Carregando..." : "Entrar"}</button>
          <button disabled={isSubmitting} id="botao">{isSubmitting ? "Carregando..." : "Cadastre-se"}</button>
        </form>
      </div>
    </div>
  );
}
