export const transactions = [
  {
    id: 1,
    date: "2025-08-22",
    type: "credit",
    description: "WIRE TRANSFER CREDIT TRUST WALLET REF# 8347XXXX",
    transac: "Deposit",
    amount: 42000,
  },
  {
    id: 2,
    date: "2025-08-24",
    type: "credit",
    description: "WIRE TRANSFER CREDIT FEDEX MANAGEMENT REF# 9274XXXX",
    transac: "Deposit",
    amount: 42000,
  },
];

export const savingTransactions = [
  {
    id: 1,
    date: "2025-07-16",
    description: "ONLINE TRANSFER TO SAVINGS $25.00",
    type: "credit",
    transac: "Deposit",
    amount: 25,
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
