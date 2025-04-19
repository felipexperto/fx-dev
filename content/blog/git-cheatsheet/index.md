---
authorid: 1
category: Dev
title: "Git cheatsheet (comandos e macetes)"
date: "2021-08-04T13:33:00.284Z"
description: "Essa lista tem objetivo de te ajudar em situações cotidianas :)"
tldr: "Essa lista tem objetivo de te ajudar em situações cotidianas :)"
---

## Comandos Git

### Aliases

<div class="fx-group">

Listar alias existentes

- `git config --list | grep alias`

</div>
<div class="fx-group">

Criar um alias

- `git config --global alias.st status`

</div>
<div class="fx-group">

Usar o alias criado acima

- `git st` (terá o mesmo efeito que `git status`)

</div>
<div class="fx-group">

Excluir alias

- `git config --global --unset alias.st`

</div>
<div class="fx-group">

Onde o alias fica armazenado?

- `~/.gitconfig`

</div>

### Branches

<div class="fx-group">

Listar branches remotas

- `git branch -r`

</div>
<div class="fx-group">

Resetar sua branch igualando ao repositório remoto

- `git reset --hard origin/[nome-da-branch]`

</div>
<div class="fx-group">

Reconstruir branch local com base em branch remota

- Sincronize as alterações: `git fetch`
- Delete a branch local: `git branch -D [nome-da-branch]`
- Faça checkout na branch: `git checkout [nome-da-branch]`

</div>

### Checkout

<div class="fx-group">

Desfazer alterações em um arquivo fora da stage

- `git checkout -- [nome-do-arquivo-01] [nome-do-arquivo-01]`

</div>
<div class="fx-group">

Pegar conteúdo de um arquivo de outra branch.

- `git ck [nome-da-branch] -- [caminho-relativo-do-arquivo]`
  - Ex: `git ck master -- packages/core/yarn.lock`

</div>

### Commits

<div class="fx-group">

Listar todos os commits e tags ( de maneira visualmente agradável)

- `git log --decorate --oneline --graph`

</div>
<div class="fx-group">

Listar todos commits não pusheados na branch atual

- `git cherry -v`

</div>
<div class="fx-group">

Listar todos commits da branch atual que não estão na branch `main`

- `git log origin/main..HEAD`

</div>
<div class="fx-group">

Fazer um commit vazio

- `git commit -m "Sua mensagem de commit" --allow-empty`

</div>
<div class="fx-group">

Fazer checkout em um commit de uma branch

- Pegue o id do commit: `git log --oneline`
- Faça checkout no commit: `git checkout [id-do-commit]`
- Crie uma branch para padronizar o desenvolvimento: `git checkout -b [nome-do-novo-branch]`

</div>
<div class="fx-group">

Deletar um commit pusheado

- `git log`
- Copie o hash do commit, ex: `c929b5c`
- `git revert [hash-do-commit]`
- Faça um `push` para sua branch

</div>
<div class="fx-group">

Deletar o último commit pusheado sem **deixar rastros**

- `git reset --hard HEAD~1`
- Faça um `git push --force origin [nome-da-sua-branch]`

</div>

### Diff

<div class="fx-group">

Verificar diferenças entre commits

- `git diff [hash-do-commit-antigo]..[hash-do-commit-recente]`

</div>

<div class="fx-group">

Ver os arquivos de um commit

- `git diff-tree --no-commit-id --name-only -r [hash-do-commit]`

</div>

### Merge

<div class="fx-group">

Cancelar um merge (digamos que você fez um `merge`, surgiram diversos conflitos e você quer voltar)

- `git merge --abort`

</div>
<div class="fx-group">

Desfazer commit de merge não pusheado (digamos que você fez um `merge`, deu certo mas você quer voltar)

- `git reset --hard HEAD~1`

</div>

### Stashes

<div class="fx-group">

Guardar alterações num espaço temporário

- `git stash`
- Conferir se foi salvo: `git stash list`
- Recuperar as alterações do comando `stash`:
  - `git stash list`
  - `git stash apply [stash-id]` para aplicar sem remover da lista de stash
  - `git stash pop` para aplicar removendo o item da lista de stash

</div>
<div class="fx-group">

Visualizar um único arquivo em stash

- `git show stash@{[posicao-do-stash-na-lista]}:[filename]`
  - Ex: `git show stash@{0}:yarn.lock`

</div>
<div class="fx-group">

Salvar um arquivo em stash com outro nome

- Path completo: `git show stash@{0}:[full filename]  >  [newfile]`
- Path relativo: `git show stash@{0}:./[relative filename] > [newfile]`

</div>

### Tags

<div class="fx-group">

Listar todas as tags

- `git tag -l`

</div>
<div class="fx-group">

Criar uma tag

- `git tag [numero-da-tag]`

</div>
<div class="fx-group">

Deletar uma tag local não pusheada

- `git tag -d [numero-da-tag]`

</div>
<div class="fx-group">

Deletar uma tag pusheada

- Delete a tag localmente: `git tag -d [numero-da-tag]`
- Depois delete a tag remota: `git push --delete origin [numero-da-tag]`

</div>
<div class="fx-group">

Gerar arquivo `zip` a partir de tag

- Crie a tag se ela não existir: `git tag [numero-da-tag]`
- `git archive [numero-da-tag] --format=zip --output=[nome-do-arquivo-zipado].zip`

</div>
