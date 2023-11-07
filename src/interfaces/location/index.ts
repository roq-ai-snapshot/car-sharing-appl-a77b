import { BookingInterface } from 'interfaces/booking';
import { GetQueryInterface } from 'interfaces';

export interface LocationInterface {
  id?: string;
  city: string;
  state: string;
  country: string;
  zip_code: string;
  street_address: string;
  created_at?: any;
  updated_at?: any;
  booking?: BookingInterface[];

  _count?: {
    booking?: number;
  };
}

export interface LocationGetQueryInterface extends GetQueryInterface {
  id?: string;
  city?: string;
  state?: string;
  country?: string;
  zip_code?: string;
  street_address?: string;
}
