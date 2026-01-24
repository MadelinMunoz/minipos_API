import {
    IsString,
    IsNumber,
    IsBoolean,
    IsOptional,
    Min,
    IsNotEmpty,
} from 'class-validator';

export class CreateProductDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    brand: string;

    @IsNumber()
    @Min(0)
    price: number;

    @IsNumber()
    @Min(0)
    stock: number;

    @IsNumber()
    @IsOptional()
    @Min(0)
    discount?:number;

    @IsBoolean()
    @IsOptional()
    isActive?:boolean;
}