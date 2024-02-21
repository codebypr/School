import { Account, Client } from "appwrite";

const client=new Client();
client.setEndpoint('https://cloud.appwrite.io/v1').setProject('65d5819895a472de07a5');
export const account =new Account(client);