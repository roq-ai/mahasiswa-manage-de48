interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: [],
  tenantRoles: ['Administrator', 'Teacher', 'Student', 'Staff'],
  tenantName: 'Organization',
  applicationName: 'Mahasiswa Management',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage users',
    'Manage organizations',
    'Manage courses',
    'Manage students',
    'Manage teachers',
    'Manage staff',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/490df0d4-41d1-48bd-ad59-91ec860d43d0',
};
