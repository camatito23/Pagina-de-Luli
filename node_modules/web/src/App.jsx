import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import ScrollToTop from '@/components/ScrollToTop';
import CustomSiteCode from '@/components/builder/CustomSiteCode';
import CookieConsent from '@/components/builder/CookieConsent';
import WhatsAppBubble from '@/components/builder/WhatsAppBubble';
import HomePage_system_home from "@/pages/builder/home/HomePage";
import '@/components/builder/styles/global.css';

function App() {
	return (
		<TooltipProvider>
			<Router>
				<ScrollToTop />
				<CustomSiteCode />
				<CookieConsent />
				<WhatsAppBubble />
				<Routes>
				<Route path={"/"} element={<HomePage_system_home />} />
				</Routes>
			</Router>
			<Toaster />
		</TooltipProvider>
	);
}

export default App;
