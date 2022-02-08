import './App.scss';
import Background from './Components/Background/background';
import Header from './Components/header/header';
import LBox from './Components/LBox/LBox';
import LContainer from './Components/LContainer/LContainer';
import Api from './Components/Posts/Api';
import SocialBox from './Components/SocialContent/SocialBox';
import SocialMobile from './Components/SocialContent/SocialMobile/SocialMobile';

function App() {
  return (
    <>
    <Header/>
    <LBox>
      <LContainer Local="Main">
        <Api/>
        <Api/>
        <Api/>
        <Api/>
        <Api/>
      </LContainer>
      <LContainer Local="Left">
      </LContainer>
      
      <LContainer Local="Right">
      <SocialBox Title="Whasapp" link="https://api.whatsapp.com/send?phone=5511953042716&text=Ol%C3%A1">
          <i class="fab fa-whatsapp"></i>
        </SocialBox>
        <SocialBox Title="Linkedin" link="https://br.linkedin.com/">
        <i class="fab fa-linkedin-in"></i>
        </SocialBox>
      </LContainer>
    </LBox>
    <SocialMobile WhatsApp="https://api.whatsapp.com/send?phone=5511953042716&text=Ol%C3%A1" Linkedin="https://br.linkedin.com/" />
    <Background/>
    </>
  );
}

export default App;
