import React from 'react';
import Footer from '@/components/Shared/Footer';
import GadgetGorHeader from '@/components/Shared/GadgetGorHeader';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-screen flex flex-col bg-[#0a0f1c] text-white">
            <GadgetGorHeader />

            <main className="flex-1">
                {children}
            </main>

            <Footer />
        </div>
    );
};

export default MainLayout;