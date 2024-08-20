import Link from 'next/link'
const Button = ({ divStyle, className, name, link }: any) => {
    return (
        <div className={divStyle}>
            <Link href={link}>
                <button className={className}>{name}</button>
            </Link>
        </div>
    )
}

export default Button