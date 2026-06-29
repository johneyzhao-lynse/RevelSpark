import { quickStartCategory } from './01-quick-start';
import { deviceSupportCategory } from './02-device-support';
import { appServicesCategory } from './03-app-services';
import { membershipPaymentCategory } from './04-membership-payment';
import { troubleshootingCategory } from './05-troubleshooting';
import { accountSecurityCategory } from './06-account-security';
import { personalizationCategory } from './07-personalization';
import { FAQCategory } from './types';

export type { FAQItem, FAQSection, FAQCategory } from './types';

// Category index mirrors the support knowledge-base split structure.
export const FAQ_CATEGORIES: FAQCategory[] = [
  quickStartCategory,
  deviceSupportCategory,
  appServicesCategory,
  membershipPaymentCategory,
  troubleshootingCategory,
  accountSecurityCategory,
  personalizationCategory,
];
