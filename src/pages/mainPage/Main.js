import './Main.css';
// import '../../components/dashboard/background/DashboardBackground.css';
import { VStack, Flex, Spacer} from '@chakra-ui/layout';
import DashboardNavigationBar from '../../components/dashboard/navigationBar/DashboardNavigationBar';
import SideBar from '../../components/dashboard/sideBar/SideBar';
import Pricing from '../../components/pricing/Pricing';
import FrontPage from '../../components/frontPage/FrontPage';
import SignUpBox from '../../components/signUpBox/SignUpBox';
import NavigationBar from '../../components/navigationBar/NavigationBar';

const Main = () => {
  return (
    <div>
      <div className="bg-image"></div>
      <VStack w='full' h='full' spacing={10}>
        <NavigationBar/>
        <Spacer></Spacer>
        <Flex>
          <SignUpBox/>
        </Flex>
      </VStack>
    </div>
  );
}

export default Main;
