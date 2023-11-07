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
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Team Member'],
  tenantName: 'Company',
  applicationName: 'Car Sharing Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read car information',
    'Book a car',
    'Provide feedback on bookings',
    'Edit personal user information',
  ],
  ownerAbilities: [
    'Manage user information',
    'Manage company information',
    'Manage car information',
    'Manage booking information',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/39a1f424-0df9-43bc-8fb4-08b6252006f2',
};
