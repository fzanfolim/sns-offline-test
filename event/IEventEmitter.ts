export type EventPayload = {
  retailerId: string;
  userId: string;
  userName: string;
  userEmail: string;
  userDevice?: string;
  platform?: string,
  userIp?: string;
  eventId: string;
  eventName: string;
  eventDetails?: any;
  categoryId: string;
  categoryName: string;
  riskId?: string;
  riskName?: string;
  date: string;
}

export interface IEventEmitter {
  emit(params: EventPayload): Promise<void>;
}

export enum Topic {
  BRANCH = 'BRANCH'
}
