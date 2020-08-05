export class StoreModel{

    constructor(
                    public _id: string,
                    public medicineName: string,
                    public price: number,
                    public pricePerQuantity: number,
                    public stock: number,
                    public expiry: string,
                    public imgUrl: string,
                    public des:string,

                                                    ){}
}