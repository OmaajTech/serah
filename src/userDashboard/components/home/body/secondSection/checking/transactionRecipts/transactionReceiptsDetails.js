export const transactions = [
  {
    id: 1,
    date: "2025-09-16",
    description: "ONLINE TRANSFER TO CHEKINGS $25.00",
    type: "credit",
    transac: "Deposit",
    amount: 25,
  },
];

export const savingTransactions = [
  {
    id: 1,
    date: "2025-10-04",
    description:
      "ACH CREDIT INVESTMENT PAYMENT REF: FUND TRANSFER ID: 22334455",
    type: "credit",
    transac: "Transfer",
    amount: 90000,
  },
];

// Selected Date
export const timeOptions = [
  { id: 5, label: "Last 7 Days", value: "7" },
  { id: 1, label: "Last 30 Days", value: "30" },
  { id: 2, label: "Last 3 Months", value: "90" },
  { id: 3, label: "Last 6 Months", value: "180" },
  { id: 4, label: "Last 12 Months", value: "365" },
];

// Selected By Debit Or Credit
export const typeOptions = [
  { id: 1, label: "Show All", value: "all" },
  { id: 2, label: "Debits", value: "debit" },
  { id: 3, label: "Credits", value: "credit" },
];

import { PiFileTextLight } from "react-icons/pi";
import { SlPrinter } from "react-icons/sl";

// Records of Statement
export const statement = [
  { id: 1, label: "View Last Statement", value: PiFileTextLight },
  { id: 2, label: "Print", value: SlPrinter },
];
