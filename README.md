# Guia de Commits e Pull Requests

Criei este guia para padronizarmos nossos commits e pull requests. Sigam estas orientações para mantermos nosso código organizado.

## ✨ Commits

### Formato que quero que usem:
```
tipo: descrição curta e clara

Por que fez essa alteração? (opcional, mas recomendado)
```

### Tipos de commit que usaremos:
- `feat`: Nova funcionalidade 
- `fix`: Correção de bug
- `docs`: Documentação
- `refactor`: Refatoração
- `test`: Testes

### Exemplos práticos:
```
feat: adiciona tela de login
- Implementei formulário com email e senha
- Adicionei validações básicas

fix: corrige erro no cálculo do carrinho
- O desconto não estava sendo aplicado corretamente
```

## 🔄 Pull Requests

### Como fazer:

1. **Antes de começar:**
   - Me avise qual feature vai fazer
   - Atualize sua main: 
   ```bash
   git checkout main
   git pull
   ```
   - Crie sua branch: `git checkout -b feature/sua-feature`

2. **Durante o desenvolvimento:**
   - Faça commits frequentes
   - Se tiver dúvidas, me chame
   - Teste bem antes de subir

3. **Para criar o PR:**
   - Título: Mesmo formato dos commits
   - Descrição: 
   ```
   O que fez?
   - Liste as principais alterações

   Como testar?
   1. Passo a passo do teste
   2. O que devemos ver funcionando
   ```

## ⚠️ Erros comuns que quero evitar:

- ❌ "ajustes diversos", "correções"
- ❌ Vários bugs diferentes em um commit
- ❌ PR sem descrição do que foi feito
- ❌ Código não testado

## 🎯 Processo ideal:

1. Avise que vai começar a feature
2. Crie a branch
3. Faça commits pequenos e claros
4. Teste tudo
5. Abra o PR e me marque
6. Aguarde meu review
7. Faça os ajustes se necessário

TESTAR ANTES DE COMITAR
