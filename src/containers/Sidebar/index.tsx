import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Fernando Bordin</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        Dev Bordin
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheiro Fron-End
      </Descricao>
      <BotaoTema onClick={props.trocaTema}>Troca Tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
