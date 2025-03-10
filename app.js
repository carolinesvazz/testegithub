//Como conectar Github local com remoto
 //Digite no terminal

git init
git add .
git commit -m "projeto inicial" // aqui você coloca o nome do seu projeto
git remote add origin
git remote add origin git@githucarolinesvazz/testegithub.git // aqui vai o link do seu repositório
git push -u origin main(master) //envia os commits do repositório local para o remoto

//Realizando um commit

git add .
git commit -m "alterando o limite do jogo" // aqui você coloca a alteração que você fez
git log 

//Conectando o repositório local com o remoto

git remote origin
git push origin master

//Verificar quais arquivos form modificados no repositório local
git status

//Como clonar repositórios do Git para meu repositório local
git clone https://github.com/carolinesvazz/numero-secreto.git //link do repositório


//Como baixar mudanças no repositório local
git pull

//Como habilitar commit diretamente com Source Control

Realizar as alterações e clicar em Source Control na aba esquerda;