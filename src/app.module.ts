import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config/config.service';
import { PassportModule } from '@nestjs/passport';
import { AuthModule } from './resources/auth/auth.module';
import { EnterpriseModule } from './resources/enterprise/enterprise.module';
import { CategoriesModule } from './resources/categories/categories.module';
import { EnterpriseInventoryModule } from './resources/enterprise-inventory/enterprise-inventory.module';
import { EnterpriseInventoryActualModule } from './resources/enterprise_inventory_actual/enterprise_inventory_actual.module';

@Module({
  imports: [
    AuthModule,
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    PassportModule.register({ session: true }),
    EnterpriseModule,
    CategoriesModule,
    EnterpriseInventoryModule,
    EnterpriseInventoryActualModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
