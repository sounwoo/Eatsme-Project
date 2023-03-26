import { Module } from '@nestjs/common';
import { getModelToken, MongooseModule } from '@nestjs/mongoose';
import { RestaurantService } from '../restaurant/restaurant.service';
import { RestaurantSchema } from '../restaurant/schemas/restaurant.schemas';
import { PersonalMapsController } from './personlMaps.Controller';
import { PersonalMapsService } from './personlMaps.Service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Restaurant', schema: RestaurantSchema },
    ]),
  ],
  controllers: [
    PersonalMapsController, //
  ],
  providers: [
    PersonalMapsService, //
    RestaurantService,
  ],
})
export class PersonalMapsModule {}
