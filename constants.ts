import { NavLink } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Quality', href: '#quality' },
  { label: 'Brands', href: '#brands' },
  { label: 'Contact', href: '#contact' },
];

export const WHATSAPP_CHANNEL_URL = "https://whatsapp.com/channel/0029Vb6Eun41yT20KEY0pE1b";

// IMPORTANT: Replace this with your deployed Google Apps Script Web App URL
// Instructions:
// 1. Create a Google Sheet.
// 2. Extensions > Apps Script.
// 3. Paste the script to handle POST requests (doGet and doPost).
// 4. Deploy > New Deployment > Web App > Execute as: Me > Who has access: Anyone.
// 5. Copy the URL and paste it below.
export const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx_PLACEHOLDER_FOR_YOUR_SCRIPT_ID/exec"; 

export const CONTACT_INFO = {
  address: "N-549/19 Saurabh Vihar, Badarpur, New Delhi-110044",
  email: "Info@ezinix.com",
  phone: "+91 9211957576"
};