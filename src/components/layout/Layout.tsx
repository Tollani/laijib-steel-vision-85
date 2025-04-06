
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { ScrollArea } from '@/components/ui/scroll-area';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <ScrollArea className="flex-grow">
        <main>
          <Outlet />
        </main>
      </ScrollArea>
      <Footer />
    </div>
  );
};

export default Layout;
