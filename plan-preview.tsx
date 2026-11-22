import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import PlanSwitch from './components/ui/PlanSwitch';
createRoot(document.getElementById('root')!).render(<div className="flex min-h-screen items-center justify-center p-4"><PlanSwitch /></div>);
