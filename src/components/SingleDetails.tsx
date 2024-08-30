import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

const SingleDetails = ({ item }: any) => {
    if (!item || !Array.isArray(item.images)) {
        console.log('something wrong');
        return null;
    }
    return (
        <div>
            <Table>
                <TableHeader>
                    <TableRow className='text-lg font-bold text-black'>
                        <TableHead>Field</TableHead>
                        <TableHead >Value</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="font-medium">Width</TableCell>
                        <TableCell>{item.dimensions.width}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">height</TableCell>
                        <TableCell>{item.dimensions.height}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">Depth</TableCell>
                        <TableCell>{item.dimensions.depth}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">WarrantyInformation</TableCell>
                        <TableCell>{item.warrantyInformation}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">ShippingInformation</TableCell>
                        <TableCell>{item.shippingInformation}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">ReturnPolicy</TableCell>
                        <TableCell>{item.returnPolicy}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">MinimumOrderQuantity</TableCell>
                        <TableCell>{item.minimumOrderQuantity}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="font-medium">Stock</TableCell>
                        <TableCell>{item.stock}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>

        </div>
    )
}

export default SingleDetails