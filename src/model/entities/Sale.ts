export type SaleProps = {
    id : string;
    products: string;
    description: string | null;
    status: string;
    price : number | 0;
    dateSale: Date;
    created: Date;
    updated: Date | null;
}

export class Sale {
    private constructor(readonly props: SaleProps){}

    public static create(products: string, status: string, description : string | null, price : number | 0, dateSale : Date){
        return new Sale({
            id : crypto.randomUUID(),
            products,
            status,
            description,
            price,
            dateSale,
            created: new Date,
            updated: null,
        });
    }

    public get id(){
        return this.props.id;
    }

    public get products(){
        return this.props.products;
    }

    public get description(){
        return this.props.description;
    }

    public get status(){
        return this.props.status
    }

    public get created(){
        return this.props.created;
    }

    public get updated(){
        return this.props.updated;
    }
}