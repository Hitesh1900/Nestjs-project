// src/scanner-location/scanner-location.service.ts

import { Injectable, Inject } from '@nestjs/common';
import { ScannerLocation } from '../models/scanner-location.model';
import { OPERATION_SUCCESS, OPERATION_FAILED } from '../functions/response.function';
import { logger } from '../src/config/logger.ts';

@Injectable()
export class ScannerLocationService {
  private readonly service_module = 'Scanner Location';

  constructor(
    @Inject('ScannerLocationRepository') private scannerLocationRepository: typeof ScannerLocation,
  ) {}

  async captureScannerLocation(data: any) {
    const { device_id, latitude, longitude, address } = data;
    try {
      let desiredLocation = await this.scannerLocationRepository.findOne({ where: { device_id } });

      if (desiredLocation) {
        // Update location if device_id exists
        await this.scannerLocationRepository.update(
          { latitude, longitude, address },
          { where: { device_id } },
        );
        let updateLocation = {
          service: this.service_module,
          device_id,
          latitude,
          longitude,
          address,
        };
        logger.info(`Updated location for device_id: ${device_id}`, { service: this.service_module });
        return OPERATION_SUCCESS('Location updated successfully', updateLocation);
      } else {
        // Create new location if device_id does not exist
        let newLocation = await this.scannerLocationRepository.create({ device_id, latitude, longitude, address });
        logger.info(`Created new location for device_id: ${device_id}`, { service: this.service_module });
        return OPERATION_SUCCESS('Location created successfully', newLocation);
      }
    } catch (error) {
      logger.error('Error capturing scanner location:', error);
      return OPERATION_FAILED('Error capturing scanner location', error);
    }
  }
}

