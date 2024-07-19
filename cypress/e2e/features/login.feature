Feature:Login
Login para acesso ao AP

Scenario: Login com sucesso
Given que eu queira acessar o sistema 
When eu insirá meu login e senha corretamente 
And clicar no botão entrar
Then tenho meu acesso realizado com sucesso

Scenario Outline: Login
Given que eu queira acessar o sistema 
When eu insirá meu login "<login>" e senha "<senha>" 
And clicar no botão entrar
Then tenho meu acesso "<mensagem>"


Examples:
| login     | senha       | mensagem          |
| weber     | 1234       | Meu acesso realizado com sucesso |
| Fernando | 1234 | Meu acesso com senha incorreto
| Marcelo | 1234 | Meu acesso com login incorreto 
