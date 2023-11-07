import { FeedbackInterface } from 'interfaces/feedback';
import { UserInterface } from 'interfaces/user';
import { CarInterface } from 'interfaces/car';
import { LocationInterface } from 'interfaces/location';
import { GetQueryInterface } from 'interfaces';

export interface BookingInterface {
  id?: string;
  start_time: any;
  end_time: any;
  user_id: string;
  car_id: string;
  location_id: string;
  created_at?: any;
  updated_at?: any;
  feedback?: FeedbackInterface[];
  user?: UserInterface;
  car?: CarInterface;
  location?: LocationInterface;
  _count?: {
    feedback?: number;
  };
}

export interface BookingGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  car_id?: string;
  location_id?: string;
}
