//Como conectar Github local com remoto
 //Digite no terminal

git init
git add .
git commit -m "projeto inicial" // aqui você coloca o nome do seu projeto
git remote add origin
git remote add origin git@githucarolinesvazz/testegithub.git // aqui vai o link do seu repositório
git push -u origin main(master)

//Realizando um commit

git add .
git commit -m "alterando o limite do jogo" // aqui você coloca a alteração que você fez
git log 

//Conectando o repositório local com o remoto

git remote origin
git push origin master
