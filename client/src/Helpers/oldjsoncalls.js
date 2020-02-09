// import axios from "axios";

// export function getTransactions(accountId, viewId) {
//   const res = axios.get(
//     `https://api.leapos.ca/obp/v4.0.0/banks/49289590adb43040e69c0d925408aed/accounts/${accountId}/${viewId}/transactions`
//   );

//   console.log(res);
// }

// export async function getAccountId() {
//   const res = await axios.get(
//     `https://api.leapos.ca/obp/v4.0.0/banks/49289590adb43040e69c0d925408aed/accounts/account_ids/private`
//   );
//   console.log(res);
// }

// export function testIt(accountId, viewId) {
//   const res = axios.get(
//     `https://api.leapos.ca/obp/v4.0.0/banks/49289590adb43040e69c0d925408aed/accounts/${accountId}/${viewId}/transactions`
//   );

//   console.log(res);
// }
const fs = require("fs").promises;
const data = require("./accountsWithtransactions.json");
const count = data.length;
console.log(count);
// const sdk = require("sdk_atb_leapos");

// (async function() {
//   try {
//     const token = await sdk.login();

//     console.log("token", token);

//     const accounts = await sdk.getPrivateAccountsAtOneBank({
//       params: {
//         bank_id: "49289590adb43040e69c0d925408aed"
//       }
//     });
//     fs.writeFile(
//       "getPrivateAccountsAtOneBank.json",
//       JSON.stringify(accounts, null, 2)
//     );
//     console.log("accounts", accounts.length);

//     const slicedAccounts = accounts.slice(39, 64);
//     const accountsWithTransactions = await Promise.all(
//       slicedAccounts.map(async (acct, i) => {
//         const transactionsObj = await sdk.getTransactionsForBankAccount({
//           params: {
//             account_id: acct.id,
//             view_id: "owner",
//             bank_id: "49289590adb43040e69c0d925408aed"
//           }
//         });
//         console.log("getting transactions for account", i + 1);
//         return {
//           ...acct,
//           ...transactionsObj
//         };
//       })
//     );
//     fs.writeFile(
//       `accountsWithtransactions3.json`,
//       JSON.stringify(accountsWithTransactions, null, 2)
//     );
//     console.log("transactions :", accountsWithTransactions.length);
//   } catch (err) {
//     console.log("err :", err);
//   }
// })();
