// src/scanner-location/scanner-location.controller.ts

import { Controller, Post, Body } from '@nestjs/common';
import { ScannerLocationService } from './scanner-location.service';

@Controller('scanner-location')
export class ScannerLocationController {
  constructor(private readonly scannerLocationService: ScannerLocationService) {}

  @Post('capture')
  async captureScannerLocation(@Body() data: any) {
    // Delegate capturing location to the service
    return this.scannerLocationService.captureScannerLocation(data);
  }
}

