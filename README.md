# semana-omnistack10

* Poposta da semana omnistack
  
# Criar um sistema que utilize NodeJS no backend e 2 aplicações no frontend, uma mobile e outra desktop
# Esse sistema teria como foco criar algo parecido com uma rede social de desenvolvedores
# O banco de dados escolhido foi o mongodb
# A lib de roteamento escolhida foi o express

* Aplicação desktop

# A aplicação desktop faria o cadastro e listagem dos desenvolvedores
# Esse cadastro envolve duas complexidades
## Utilização da api do github para buscar a partir do username todas as informações do usuários
## Captação de coordenadas geográficas do usuário para obter a localização
# Implementação própria Paginação dos devs

* Aplicação mobile

# Capta a localização do usuário em tempo real
# Os devs que apareceriam inicialmente viriam todos num raio de 10km 
# Existe um filtro a partir das tecnologias cadastradas pelo usuário na aplicação web
# Os devs que são cadastrados, caso estejam dentro do esperado pelo app aparecem em tempo real
# Essa condição da exibição de devs em tempo real é feita com a lib socket.io
