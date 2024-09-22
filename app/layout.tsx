import '../styles/globals.css';
import { ReactNode } from 'react';  // Import ReactNode type
import Nav from '../components/Nav';

export const metadata = {
    title: "HostelTransylvania",
    description: 'VITians query solver',
}

interface RootLayoutProps {
    children: ReactNode;  // Define the type for the children prop
}

const RootLayout = ({ children }: RootLayoutProps) => {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}

export default RootLayout;