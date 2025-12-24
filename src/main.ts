type ProductProps = {
    id : string;
    name: string;
    price: number | 0;
    quantity: number| 0;
    description: string | null;
    status: string;
    created: Date;
    updated: Date | null;
}

class Product {
    private constructor(readonly props : ProductProps){}

    public static create(name: string, price: number, quantity: number, status: string, description: string) {
        return new Product({
            id : crypto.randomUUID(),
            name,
            price,
            quantity,
            description,
            status,
            created: new Date,
            updated: null
        });
    }

    public get id(){
        return this.props.id;
    }

    public get name(){
        return this.props.name;
    }

    public get price(){
        return this.props.price;
    }

    public get quantity(){
        return this.props.quantity
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