/**
 * Shop FAQ Data
 * 
 * Frequently asked questions for the online shop.
 * 
 * @package HandcraftedWines
 * @version 1.0
 */

import { SITE_CONTENT } from './site-content';

export const SHOP_FAQ = [
  {
    question: "HOW DO I PLACE AN ORDER?",
    answer: "Simply browse our selection, add items to your cart, and proceed to checkout. You'll need to provide delivery details and payment information to complete your order."
  },
  {
    question: "WHAT PAYMENT METHODS DO YOU ACCEPT?",
    answer: "We accept all major credit cards (Visa, Mastercard), debit cards, and EFT payments for online orders."
  },
  {
    question: "HOW MUCH IS DELIVERY?",
    answer: `Delivery is R75 for orders under R${SITE_CONTENT.shop.freeShippingThreshold}. Orders over R${SITE_CONTENT.shop.freeShippingThreshold} qualify for free shipping anywhere in South Africa.`
  },
  {
    question: "HOW LONG DOES DELIVERY TAKE?",
    answer: "Standard delivery takes 3-5 business days for most areas in South Africa. Remote areas may take up to 7 business days. You'll receive a tracking number once your order ships."
  },
  {
    question: "CAN I CHANGE OR CANCEL MY ORDER?",
    answer: `To cancel your order email the request to: <a href='mailto:${SITE_CONTENT.contact.salesEmail}' class='text-[#8B0000] hover:underline'>${SITE_CONTENT.contact.salesEmail}</a> or call us on: ${SITE_CONTENT.contact.phoneFormatted}`
  },
  {
    question: "DO YOU SHIP INTERNATIONALLY?",
    answer: "Currently we only ship within South Africa. For international orders, please contact us directly and we'll do our best to assist."
  },
  {
    question: "CAN I COLLECT MY ORDER?",
    answer: `Yes! You can collect your order from our farm tasting room. Select "Pickup" at checkout and we'll notify you when your order is ready. Collection is available during our regular hours: ${SITE_CONTENT.hours.tastingRoom.weekdays}, ${SITE_CONTENT.hours.tastingRoom.sundays}.`
  },
  {
    question: "WHAT DO I DO IF I NEVER RECEIVED MY ORDER?",
    answer: `Email your specific query to: <a href='mailto:${SITE_CONTENT.contact.salesEmail}' class='text-[#8B0000] hover:underline'>${SITE_CONTENT.contact.salesEmail}</a> or call us on: ${SITE_CONTENT.contact.phoneFormatted}`
  },
  {
    question: "DO YOU ACCEPT RETURNS?",
    answer: "Due to the nature of our products (alcohol and perishable cheese), we can't accept returns unless the product is damaged or faulty. Please contact us immediately if there's an issue with your order."
  },
  {
    question: "FROM WHERE DO YOU OPERATE?",
    answer: `${SITE_CONTENT.brand.name}; ${SITE_CONTENT.contact.address.full}`
  }
];

export default SHOP_FAQ;
