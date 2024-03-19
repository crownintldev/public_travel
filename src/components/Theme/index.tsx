//@ts-nocheck
"use client"
import React, { useState, useEffect } from 'react';
import ColorPicker from './ColorInput';

const Theme = () => {
  const [color1, setColor1] = useState('');
  const [color2, setColor2] = useState('');
  const [color3, setColor3] = useState('');
  const [color4, setColor4] = useState('');
  const [color5, setColor5] = useState('');
  const [color6, setColor6] = useState('');
  const [color7, setColor7] = useState('');
  const [color8, setColor8] = useState('');
  const [color9, setColor9] = useState('');
  const [color10, setColor10] = useState('');



  // Define default colors
  const defaultColors = {
    color1: '#fed7aa', // Example default color for color1
    color2: '#fdba74', // Example default color for color2
    color3: '#fb923c', // Example default color for color3
    color4: '#f97316', // Example default color for color4
    color5: '#ea580c', // Example default color for color5
    // Text color main
    color6: '#000000', // Example default color for color5
    // Box bg- color
    color7: '#fb923c', // Example default color for color5
    // box text color
    color8: '#ffffff', // Example default color for color5
     /* Navbar color */
    color9: '#ffffff', /* default theme color */
  /* Navbar link color */
    color10: '#000000', /* default theme color */

  };

  useEffect(() => {
    // Load and apply saved colors for each color variable
    ['color1', 'color2', 'color3', 'color4', 'color5','color6','color7','color8',,'color9','color10'].forEach((key, index) => {
      const savedColor = localStorage.getItem(key);
      if (savedColor) {
        document.documentElement.style.setProperty(`--color-primary${index + 1}`, savedColor);
      } else {
        // Apply default color if no saved color is found
        document.documentElement.style.setProperty(`--color-primary${index + 1}`, defaultColors[key]);
      }
    });
    setColor1(localStorage.getItem('color1') || defaultColors.color1);
    setColor2(localStorage.getItem('color2') || defaultColors.color2);
    setColor3(localStorage.getItem('color3') || defaultColors.color3);
    setColor4(localStorage.getItem('color4') || defaultColors.color4);
    setColor5(localStorage.getItem('color5') || defaultColors.color5);
    setColor6(localStorage.getItem('color6') || defaultColors.color6);
    setColor7(localStorage.getItem('color7') || defaultColors.color7);
    setColor8(localStorage.getItem('color8') || defaultColors.color8);
    setColor9(localStorage.getItem('color9') || defaultColors.color9);
    setColor10(localStorage.getItem('color10') || defaultColors.color10);


  }, []);

  const applyColorScheme = () => {
    document.documentElement.style.setProperty('--color-primary1', color1);
    localStorage.setItem('color1', color1);

    document.documentElement.style.setProperty('--color-primary2', color2);
    localStorage.setItem('color2', color2);

    document.documentElement.style.setProperty('--color-primary3', color3);
    localStorage.setItem('color3', color3);

    document.documentElement.style.setProperty('--color-primary4', color4);
    localStorage.setItem('color4', color4);

    document.documentElement.style.setProperty('--color-primary5', color5);
    localStorage.setItem('color5', color5);
    document.documentElement.style.setProperty('--color-primary6', color6);
    localStorage.setItem('color6', color6);
    document.documentElement.style.setProperty('--color-primary7', color7);
    localStorage.setItem('color7', color7);
    document.documentElement.style.setProperty('--color-primary8', color8);
    localStorage.setItem('color8', color8);
    document.documentElement.style.setProperty('--color-primary9', color9);
    localStorage.setItem('color9', color9);
    document.documentElement.style.setProperty('--color-primary10', color10);
    localStorage.setItem('color10', color10);
  };

  const resetToDefaultColors = () => {
    // Apply default colors
    ['color1', 'color2', 'color3', 'color4', 'color5', 'color6', 'color7', 'color8', 'color9', 'color10'].forEach((key, index) => {
      document.documentElement.style.setProperty(`--color-primary${index + 1}`, defaultColors[key]);
      localStorage.setItem(key, defaultColors[key]);
    });
    setColor1(defaultColors.color1);
    setColor2(defaultColors.color2);
    setColor3(defaultColors.color3);
    setColor4(defaultColors.color4);
    setColor5(defaultColors.color5);
    setColor6(defaultColors.color6);
    setColor7(defaultColors.color7);
    setColor8(defaultColors.color8);
    setColor9(defaultColors.color9);
    setColor10(defaultColors.color10);

  };

  return (
    <>
      <ColorPicker color={color1} setColor={setColor1} label="Color 1" />
      <ColorPicker color={color2} setColor={setColor2} label="Color 2" />
      <ColorPicker color={color3} setColor={setColor3} label="Color 3" />
      <ColorPicker color={color4} setColor={setColor4} label="Color 4" />
      <ColorPicker color={color5} setColor={setColor5} label="Color 5" />
      <ColorPicker color={color6} setColor={setColor6} label="Primary text color" />
      <ColorPicker color={color7} setColor={setColor7} label="box color" />
      <ColorPicker color={color8} setColor={setColor8} label="box inner text color" />
      <ColorPicker color={color9} setColor={setColor9} label="Navbar color" />
      <ColorPicker color={color10} setColor={setColor10} label="Navbar link color" />



      <button onClick={applyColorScheme} className="mt-2 p-2 border rounded">
        Apply Color Scheme
      </button>
      <button onClick={resetToDefaultColors} className="mt-2 p-2 border rounded bg-gray-200">
        Reset to Default Colors
      </button>
    </>
  );
}

export default Theme;