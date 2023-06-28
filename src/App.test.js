import { render, screen } from '@testing-library/react';
import App from './App';
import SideNavBar from "./SideNavBar/SideNavBar";
import React, { useState } from "react";
import ReactDOM from 'react-dom';

test('renders learn react link', () => {
  render(
<BrowserRouter>
<App />
</BrowserRouter>
 
  
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
