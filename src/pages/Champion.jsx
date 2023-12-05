import { StyledMain, BackgroundContainer } from "../styles/styledChampion";
import logo from "../assets/images/logo2.png";
import equipe from "../assets/images/equipe.jpg";

export const Champion = () => {
  return (
    <>
      <BackgroundContainer />
      <StyledMain>
        <div className="champion_info">
          <div className="champion_info_team">
            <h1>CAMPEÃO</h1>
            <h2>Unidos do Coco</h2>
          </div>
          <img src={logo} alt="logo campeonato" className="logo" />
        </div>
        <figure className="team_info">
          <img src={equipe} alt="equipe campeã" className="equipe" />
          <figcaption>
            <h2>Técnico: Moisés Batista da Silva</h2>
            <h2>
              Em pé: Maurício,Zulu,Paulinho,Samuca,Heron,Clebão,
              Uatson,Banana,Roger,Japa
            </h2>
            <h3>
              Agachados: Lamarques, Robson, Ruan,De
              Assis,Fernandinho,Formiga,Ronaldo,Chiquinho,Joadson,Mailson,Valdir,Biano
            </h3>
          </figcaption>
        </figure>

        <div className="team_info_history">
          <h1>História</h1>
          <p>
            Em 20 de novembro de 2020, os amigos Biano e Clebão deram vida ao
            Unidos do Coco, uma iniciativa que homenageia o Sr. Ademir,
            carinhosamente conhecido como Coco, um respeitado comerciante e pai
            de Biano, figura querida no bairro Bom Retiro, em Sumaré. Os
            fundadores, Biano e Clebão, convidaram Moacir para ser o técnico e
            Moisés como Auxiliar. Moacir, entusiasmado, não apenas abraçou a
            ideia mas também contribuiu financeiramente para a aquisição do
            primeiro uniforme da equipe. O propósito inicial era simples:
            prestar uma singela homenagem ao Sr. Coco, mas o Unidos do Coco
            rapidamente superou as expectativas. Em 2021, Moacir deixou a
            equipe, passando o comando para Moisés. Mesmo com apenas um ano de
            existência, o Unidos do Coco celebrou sua primeira conquista,
            campeão da Copa Amizade 2021, marcando o início de uma jornada de
            sucesso. Em 2022, o time alcançou a segunda colocação na segunda
            edição da Copa Amizade 2022, conquistando o título de vice-campeão.
            Já em 2023, no início do ano, o time conquistou o terceiro lugar na
            competitiva Copa Áurea Cura, que reúne as melhores equipes de Sumaré
            (1ª e 2ª divisões). No mesmo ano, o Unidos do Coco atingiu a glória
            ao sagrar-se campeão da Copa dos Campeões 2023, adicionando duas
            estrelas reluzentes ao distintivo, simbolizando essas vitórias
            memoráveis. O que começou como uma simples homenagem transformou-se
            em uma trajetória de sucesso para o Unidos do Coco, que agora brilha
            com orgulho por suas conquistas no cenário esportivo local.
          </p>
          {/* <p>Sede da equipe: </p> */}
        </div>
      </StyledMain>
    </>
  );
};
