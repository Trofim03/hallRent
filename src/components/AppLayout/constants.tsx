import { LogIn, SignUp } from "../../Pages";

export const loginTabsItems = [
    {
      key: 'logIn',
      label: 'Войти',
      children: <LogIn />,
    },
    {
      key: 'signUp',
      label: 'Регистрация',
      children: <SignUp />,
    }
  ];