import {
    IsBoolean,
    IsInt,
    IsNotEmpty,
    IsNumber,
    IsOptional,
    IsString,
    Min,
} from 'class-validator';

export class CreateProductDto {

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsNumber()
    @Min(0)
    price: number;

    @IsString()
    sku: string;

    @IsInt()
    @IsOptional()
    stock?: number;

    @IsBoolean()
    @IsOptional()
    isActive?: boolean;

    @IsString()
    categoryId: string;
}