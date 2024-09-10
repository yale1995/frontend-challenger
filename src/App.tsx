import { Header } from './components/header'
import { MenuContainer } from './components/menu-container'
import { Navigation } from './components/navigation'
import { SearchInput } from './components/search-input'
import { Wrapper } from './components/wrapper'

export const App = () => {
  return (
    <>
      <Navigation />
      <Header />

      <Wrapper>
        <SearchInput />

        <MenuContainer>
          <div>oi</div>
          <div>ola</div>
        </MenuContainer>
      </Wrapper>
    </>
  )
}
