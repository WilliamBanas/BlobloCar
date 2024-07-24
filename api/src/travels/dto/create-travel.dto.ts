export class CreateTravelDto {
  description: string;
  start_location: string;
  end_location: string;
  date: Date;
  capacity: number;
  deviation_allowed: boolean;
  user_id: number;
}
