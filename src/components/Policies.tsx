import { policies } from "@/data/data"
import Image from "next/image"

const Policies = ({className, parentClass}:any) => {
    return (
        <section className='relative py-8'>
            <div className='max-w-[90%] mx-auto'>
                <div className={parentClass}>
                    {
                        policies.map((elem) => {
                            return (
                                <div className={className} key={elem.id}>
                                    <div>
                                        <Image src={elem.img} alt={elem.heading} width={40} height={40} />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg">{elem.heading}</h3>
                                        <span>{elem.para}</span>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </section>
    )
}

export default Policies