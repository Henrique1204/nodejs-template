const messages = {
  '400': 'Dados incompletos.',
  '401': 'Token não informado.',
  '403': 'Você não tem autorização necessária para continuar.',
  '404': 'Dados não encontrados.',
  '406': 'Dados inválidos.',
  '422': 'Informações já existem no banco de dados.',
  '502': 'Erro ao salvar ou buscar dados.',
};

type Messages = typeof messages;
type APICode = keyof Messages;

export class ExceptionAPI {
  public type = 'API';

  constructor(public cod: APICode, public message = messages[cod]) {}
}
