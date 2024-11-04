import { log } from "@temporalio/activity";

import { Customer } from "./shared";


// email activities

export async function sendWelcomeEmail(customer: Customer): Promise<void> {
  log.info(`Sending welcome email to ${customer.email}`);
}

export async function sendCancellationEmailDuringTrialPeriod(
  customer: Customer
): Promise<void> {
  log.info(`Sending trial cancellation email to ${customer.email}`);
}

export async function sendSubscriptionFinishedEmail(customer: Customer) {
  log.info(`Sending subscription completed email to ${customer.email}`);
}

export async function sendSubscriptionOverEmail(customer: Customer) {
  log.info(`Sending subscription over email to ${customer.email}`);
}


// charge activities

export async function chargeCustomerForBillingPeriod(
  customer: Customer,
  chargeAmount: number
) {
  log.info(`Charging ${customer.email} amount ${chargeAmount} for their billing period`);
}