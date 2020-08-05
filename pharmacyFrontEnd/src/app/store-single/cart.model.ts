export class CartModel{

    constructor(
                    public _id: string,
                    public medicineName: string,
                    public price: number,
                    public pricePerQuantity: number,
                    public value: number,
                    public total: number,
                    public stock: number,
                    public expiry: string,
                    public imgUrl: string,
                    public des:string,

                                                    ){}
}