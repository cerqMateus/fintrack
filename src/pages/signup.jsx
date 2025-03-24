/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router";
import { z } from "zod";

import PasswordInput from "@/components/PasswordInput";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

const signupSchema = z.object({
  firstName: z.string().trim().min(1, {
    message: "O nome é obrigatório",
  }),
  lastName: z.string().trim().min(1, {
    message: "O sobrenome é obrigatório",
  }),
  email: z
    .string()
    .email({
      message: "O email é inválido",
    })
    .trim()
    .min(1, {
      message: "O email é obrigatório",
    }),
  password: z.string().trim().min(6, {
    message: "A senha deve ter no mínimo 6 caracteres",
  }),
  passwordConfirmation: z.string().trim().min(6, {
    message: "A confirmação de senha é obrigatória",
  }),
  terms: z.boolean().refine((value) => value === true, {
    message: "Você precisa aceitar os termos",
  }),
});

console.log(signupSchema);
const SignUpPage = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-3">
      <Card className="w-[500px]">
        <CardHeader>
          <CardTitle>Crie a sua conta</CardTitle>
          <CardDescription>Insira os seus dados abaixo</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input placeholder="Digite seu primeiro nome"></Input>
          <Input placeholder="Digite seu sobrenome"></Input>
          <Input placeholder="Digite seu email"></Input>
          <PasswordInput />
          <PasswordInput placeholder="Digite sua senha novamente" />
          <div className="items-top flex space-x-2">
            <Checkbox id="terms" />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="terms1"
                className="text-xs text-muted-foreground opacity-75"
              >
                Ao clicar em "Criar conta", você concorda com os{" "}
                <a className="text-white underline" href="#">
                  nossos termos de uso e política de privacidade
                </a>
              </label>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Criar conta</Button>
        </CardFooter>
      </Card>
      <div className="flex items-center justify-center">
        <p className="text-center opacity-50">Já possui uma conta?</p>
        <Button variant="link" asChild>
          <Link to={"/login"}>Faça login</Link>
        </Button>
      </div>
    </div>
  );
};

export default SignUpPage;
