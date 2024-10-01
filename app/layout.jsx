import '@/assets/styles/globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Whats Broken? | Fix it quick!',
  description: 'Who to call when things break',
  keywords: 'maintenance, resteraunts, service, find technician'
}

const MainLayout = ( { children }) => {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout