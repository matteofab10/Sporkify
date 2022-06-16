import {Abbonamento} from "./abbonamento";

export interface User {
  name: string,
  surname: string,
  cardNumber: number,
  expiration: string,
  cardPin: number,
  subscriptionType: Abbonamento,
  subscriptionTime: string,
}
