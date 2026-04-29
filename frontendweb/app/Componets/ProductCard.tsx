import Image from 'next/image';
export default function ProductCard() {
    return (
        <article className="flex flex-col max-w-70">
            <div className="border-b border-stone-200 bg-stone-100 p-4">
                <div className="relative mx-auto flex h-36 w-full items-center bg-white rounded-lg">
                </div>
            </div>

            <div className="p-4">
                <div className="flex justify-between flex-1">
                    <div className="flex flex-col">
                        <p className="text-sm front-light uppercase tracking-wide text-stone-500">Product</p>
                        <h3 className="text-sm font-bold text-stone-900">Product Name</h3>
                    </div>
                    <div className="flex flex-col">
                        <p className="rounded-md bg-stone-100 px-2 py-1 text-sm font-bold text-stone-700">$9.99</p>
                    </div>
                </div>
                <p className="text-sm leading-5 text-stone-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ipsam amet, et voluptatibus delectus sint pariatur reprehenderit nihil aliquam recusandae deleniti corrupti, modi vel, porro saepe numquam illum. Odio, sit!</p>

                <div className="flex items-center justify-between rpunded-lg bg-stone-50 px-3 py-2 text-sm"></div>
                <span className="font-medium text-stone-900">Availability</span>
                <span>In Store</span>
            </div>
        </article>
    )
}