import { Module } from "@nestjs/common";
import { VehiclesController } from "./vehicles.controller";

@Module({
    imports: [],
    controllers: [VehiclesController],
})
export class VehiclesModule {}
