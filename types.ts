export interface FormData {
  name: string;
  phone: string;
  businessName: string;
  gstNumber: string;
  location: string;
}

export interface FormStatus {
  submitted: boolean;
  submitting: boolean;
  error: string | null;
}

export interface NavLink {
  label: string;
  href: string;
}