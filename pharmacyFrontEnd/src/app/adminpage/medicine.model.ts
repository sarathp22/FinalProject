export class MedicineModel{

    constructor(
                    public medicineName: string,
                    public price: number,
                    public pricePerQuantity: number,
                    public stock: number,
                    public expiry: string,
                    public imgUrl: string,
                    public des:string

                                                    ){}
}