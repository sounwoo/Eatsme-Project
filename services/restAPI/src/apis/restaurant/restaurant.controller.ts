import { Body, Controller, Delete, Get, Post, Req } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Request } from 'express';
import { getRestaurantsInput } from './dto/get-restaurants.input';
import { IRestaurantServiceGetRestaurants } from './interfaces/restaurantService.interface';
import { RestaurantService } from './restaurant.service';
import { Restaurant } from './schemas/restaurant.schemas';

@ApiBearerAuth()
@ApiTags('restaurants')
@Controller()
export class RestaurantController {
  constructor(
    private readonly restaurantService: RestaurantService, //
  ) {}

  @Post('/info/road/restaurant')
  postRestaurants(
    @Body() body: { area: string; section: string }, //
  ): Promise<void> {
    return this.restaurantService.postRestaurants({ body });
  }

  @Get('/info/road/restaurant')
  @ApiOperation({ summary: 'Create cat' })
  @ApiResponse({
    status: 200,
    description: '행정구역의 추천 식당 정보를 조회합니다',

    type: Promise<Restaurant[]>,
  })
  getRestaurants(
    @Body() body: getRestaurantsInput, //
  ): Promise<Restaurant[]> {
    console.log(body);
    return this.restaurantService.getRestaurants({ body });
  }

  @Get('/info/road/get/restaurant')
  getRestaurant(
    @Req() req: Request, //
  ): Promise<object> {
    return this.restaurantService.getRestaurant({ req });
  }

  @Get('/info/road/findOne/restaurant')
  findeOneRestaurant(
    @Req() req: Request, //
  ): Promise<Restaurant> {
    return this.restaurantService.findOneRestaurant({
      restaurant_id: req.body,
    });
  }

  @Get('/info/road/find/restaurant')
  UsergetRestaurants(
    @Req() req: Request, //
  ): Promise<Restaurant[]> {
    return this.restaurantService.UsergetRestaurants({ req });
  }

  @Delete('/info/road/restaurant')
  deleteRestaurant(
    @Body() body: string, //
  ): Promise<string> {
    return this.restaurantService.deleteCollection({ body });
  }

  @Delete('/info/road/restaurants')
  deleteRestaurants(
    @Body() body: string, //
  ): Promise<string> {
    return this.restaurantService.deleteSection({ body });
  }
}
